//////////////////////////////////////////////////////////////////////////////
// Класс РЕДАКТОР                                                           //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TEditor
 * NAME
 *    Класс TEditor — основной класс, описывающий SGF редактор
 * VERSION
 *    0.3 (20.06.2011)
 * FUNCTION
 *    Основной класс, описывающий SGF редактор. Включает в себя объекты всех
 *    классов данного пп. Содержит алгоритмы взаимодействия с пользователем и
 *    навигации по узлам SGF дерева.
 * DESCRIPTION
 *        UML диаграмма классов:
 *
 *    image:classes.jpg
 *
 * AGGREGATION
 *    {TSGFParser} SGFParser —— SGF парсер с деревом
 *    {TBoard}     Board     —— доска
 * METHODS
 *    {Void} DrawManager —— выводит панель управления
 *    {Void} LoadSGF —— загружает SGF данных и запускает создание доски
 *    {Void} StartGame —— запускает создание доски и всё необходимое для игры
 *    {Void} MakeSGF —— вывод SGF данной партии
 *    {Void} BuildGame —— создание новой игры
 *    {Void} MakeMove —— выполняет пользовательский ход
 *    {Void} TrueChangesOnBoard —— вносит изменения на доску
 *    {Void} SGFMove —— вносит изменения заданного узла на доску
 *    {Void} BuildCurentVariants —— строит варианты хода
 *    {Void} NextMove —— переходит к следующему узлу
 *    {Void} PrevMove —— переходит к предыдущему узлу
 *    {Void} LastMove —— переходит к последнему узлу
 *    {Void} FirstMove —— переходит к первому узлу
 *    {Void} ShowVariant —— переходит к другому варианту хода
 *    {Void} ShowOptions —— выводит на вэб-страницу форму настроек
 * INPUTS
 *    -
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TEditor()
{
    this.SGFParser = new TSGFParser();
    this.Board;


    /****m* SmallGoEditor/TEditor.DrawManager
     * NAME
     *    DrawManager — выводит панель управления
     * FUNCTION
     *    Этот метод формирует и выводит на вэб-страницу HTML код панели
     *    управления.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.DrawManager = function()
    {
      document.all.item('Manage').innerHTML = "\
        <hr color='gray'>\
        <input type='button' value='<<++' onclick='Editor.FirstMove();'>\
        <input type='button' value='<<' onclick='Editor.PrevMove();'>\
        <input type='button' value='>>' onclick='Editor.NextMove();'>\
        <input type='button' value='++>>' onclick='Editor.LastMove();'>\
        <input type='button' value='SGF' onclick='Editor.MakeSGF();'>\
        <input type='button' value='Выход' onclick='window.location.reload(true);'>\
        <div id='Variants'></div>\
        <hr color='gray'>\
        <div id='GeneratedSGF'></div>";
    };
    /*********/


    /****m* SmallGoEditor/TEditor.LoadSGF
     * NAME
     *    LoadSGF — загружает SGF данных и запускает создание доски
     * FUNCTION
     *    Этот метод загружает SGF данные, запускает строительство дерева, на
     *    основе этих данных, запускает создание доски.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    // загрузка SGF данных и создание доски
    this.LoadSGF = function()
    {
      // загружаем SGF
      this.SGFParser.SGF = document.all.item('SGF').value;
      // создаём дерево на основе SGF
      this.SGFParser.BuildTree();
      // начинаем игру
      this.StartGame(this.SGFParser.Tree.Nodes[0].SZ - 0);
    };
    /*********/


    /****m* SmallGoEditor/TEditor.StartGame
     * NAME
     *    StartGame — запускает создание доски и всё необходимое для игры
     * FUNCTION
     *    Этот метод запускает создание доски, загружает параметры игры и
     *    выполняет всё необходимые методы для начала игры.
     * INPUTS
     *    {Number} BoardSize —— размер доски
     * RESULT
     *    -
     * SOURCE
     */
    this.StartGame = function(BoardSize)
    {
      // создаём доску заданного размера
      this.Board = new TBoard(BoardSize);
      // загружаем данные об игре
      this.Board.Game.AN = this.SGFParser.Tree.Nodes[0].AN;
      this.Board.Game.BR = this.SGFParser.Tree.Nodes[0].BR;
      this.Board.Game.BT = this.SGFParser.Tree.Nodes[0].BT;
      this.Board.Game.CP = this.SGFParser.Tree.Nodes[0].CP;
      this.Board.Game.DT = this.SGFParser.Tree.Nodes[0].DT;
      this.Board.Game.EV = this.SGFParser.Tree.Nodes[0].EV;
      this.Board.Game.GC = this.SGFParser.Tree.Nodes[0].GC;
      this.Board.Game.GN = this.SGFParser.Tree.Nodes[0].GN;
      this.Board.Game.ON = this.SGFParser.Tree.Nodes[0].ON;
      this.Board.Game.OT = this.SGFParser.Tree.Nodes[0].OT;
      this.Board.Game.PB = this.SGFParser.Tree.Nodes[0].PB;
      this.Board.Game.PC = this.SGFParser.Tree.Nodes[0].PC;
      this.Board.Game.PW = this.SGFParser.Tree.Nodes[0].PW;
      this.Board.Game.RE = this.SGFParser.Tree.Nodes[0].RE;
      this.Board.Game.RO = this.SGFParser.Tree.Nodes[0].RO;
      this.Board.Game.RU = this.SGFParser.Tree.Nodes[0].RU;
      this.Board.Game.SO = this.SGFParser.Tree.Nodes[0].SO;
      this.Board.Game.TM = this.SGFParser.Tree.Nodes[0].TM;
      this.Board.Game.US = this.SGFParser.Tree.Nodes[0].US;
      this.Board.Game.WR = this.SGFParser.Tree.Nodes[0].WR;
      this.Board.Game.WT = this.SGFParser.Tree.Nodes[0].WT;
      // отрисовка панели управления
      this.DrawManager();
      // создание вариантов хода для корневого узла
      this.BuildCurentVariants(0);
      // вносим изменения на доску для корневого узла
      this.TrueChangesOnBoard(0);
    };
    /*********/


    /****m* SmallGoEditor/TEditor.MakeSGF
     * NAME
     *    MakeSGF — вывод SGF данной партии
     * FUNCTION
     *    Этот метод вызывает постройку SGF и выводит её на вэб-страницу.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.MakeSGF = function()
    {
      var result = "";
      if (document.all.item('GeneratedSGF').innerHTML == "")
      {
        result = "<textarea class='Options' rows=10 cols=45>" + this.SGFParser.BuildSGF() + "</textarea>";
      }
      document.all.item('GeneratedSGF').innerHTML = result;
    };
    /*********/


    /****m* SmallGoEditor/TEditor.BuildGame
     * NAME
     *    BuildGame — создание новой игры
     * FUNCTION
     *    Этот метод создаёт SGF с одним корневым узлом, сгенерированным с
     *    использованием пользовательских данных, и на его основе запускает
     *    строительство дерева и создание доски.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.BuildGame = function()
    {
      var BoardSize   = null;
      var PlayerBlack = null;
      var BlackRank   = null;
      var BlackTeam   = null;
      var PlayerWhite = null;
      var WhiteRank   = null;
      var WhiteTeam   = null;
      var Annotation  = null;
      var Date        = null;
      var Event       = null;
      var Result      = null;
      var Round       = null;
      var Rules       = null;
      var Source      = null;
      var User        = null;
      var Copyright   = null;
      var Application = null;
      // создаём новый SGF
      var data = "(;"; // <—— это не смайлик
      try
      {
        // читаем параметры новой игры
        BoardSize   = document.all.item('BoardSize').value - 0;
        PlayerBlack = document.all.item('oPB').value;
        BlackRank   = document.all.item('oBR').value;
        BlackTeam   = document.all.item('oBT').value;
        PlayerWhite = document.all.item('oPW').value;
        WhiteRank   = document.all.item('oWR').value;
        WhiteTeam   = document.all.item('oWT').value;
        Annotation  = document.all.item('oAN').value;
        Date        = document.all.item('oDT').value;
        Event       = document.all.item('oEV').value;
        Result      = document.all.item('oRE').value;
        Round       = document.all.item('oRO').value;
        Rules       = document.all.item('oRU').value;
        Source      = document.all.item('oSO').value;
        User        = document.all.item('oUS').value;
        Copyright   = document.all.item('oCP').value;
        Application = document.all.item('oAP').value;
      }
      catch(error)
      {
        // параметры новой игры по умолчанию
        BoardSize = 19;
        PlayerBlack = "Black";
        PlayerWhite = "White";
        Application = "Small Go Editor dolu.planetario.ru/sge";
      };
      // заполняем SGF
      data += "SZ[" + BoardSize   + "]";
      if ( (PlayerBlack != null) &&
           (PlayerBlack != "")   ) { data += "PB[" + PlayerBlack + "]"; };
      if ( (BlackRank   != null) &&
           (BlackRank   != "")   ) { data += "BR[" + BlackRank   + "]"; };
      if ( (BlackTeam   != null) &&
           (BlackTeam   != "")   ) { data += "BT[" + BlackTeam   + "]"; };
      if ( (PlayerWhite != null) &&
           (PlayerWhite != "")   ) { data += "PW[" + PlayerWhite + "]"; };
      if ( (WhiteRank   != null) &&
           (WhiteRank   != "")   ) { data += "WR[" + WhiteRank   + "]"; };
      if ( (WhiteTeam   != null) &&
           (WhiteTeam   != "")   ) { data += "WT[" + WhiteTeam   + "]"; };
      if ( (Annotation  != null) &&
           (Annotation  != "")   ) { data += "AN[" + Annotation  + "]"; };
      if ( (Date        != null) &&
           (Date        != "")   ) { data += "DT[" + Date        + "]"; };
      if ( (Event       != null) &&
           (Event       != "")   ) { data += "EV[" + Event       + "]"; };
      if ( (Result      != null) &&
           (Result      != "")   ) { data += "RE[" + Result      + "]"; };
      if ( (Round       != null) &&
           (Round       != "")   ) { data += "RO[" + Round       + "]"; };
      if ( (Rules       != null) &&
           (Rules       != "")   ) { data += "RU[" + Rules       + "]"; };
      if ( (Source      != null) &&
           (Source      != "")   ) { data += "SO[" + Source      + "]"; };
      if ( (User        != null) &&
           (User        != "")   ) { data += "US[" + User        + "]"; };
      if ( (Copyright   != null) &&
           (Copyright   != "")   ) { data += "CP[" + Copyright   + "]"; };
      if ( (Application != null) &&
           (Application != "")   ) { data += "AP[" + Application + "]"; };
      data += ")";
      // загружаем SGF
      this.SGFParser.SGF = data;
      // создаём новое дерево на основе SGF
      this.SGFParser.BuildTree();
      // начинаем игру
      this.StartGame(BoardSize);
    };
    /*********/


    /****m* SmallGoEditor/TEditor.MakeMove
     * NAME
     *    MakeMove — выполняет пользовательский ход
     * FUNCTION
     *    Этот метод выполняет ход пользователя в указанную ячейку на доске и
     *    записывает комментарий.
     * INPUTS
     *    {String} XY —— строка с координатами хода
     * RESULT
     *    -
     * SOURCE
     */
    this.MakeMove = function(XY)
    {
      // получение координат хода
      var x = this.Board.SGF_LtN(XY.charAt(0));
      var y = this.Board.SGF_LtN(XY.charAt(1));
      // текущая позиция в дереве
      var CurrentIndexTree = this.Board.Game.SGFMoveIndex;
      // запись комментария в предыдущий узел
      if (document.all.item('CommentArea').value != "")
      {
        this.SGFParser.Tree.Nodes[CurrentIndexTree].C =
          [document.all.item('CommentArea').value];
      };
      var data = [];
      var dataIndex = 0;
      if (this.Board.Places[x][y].Stone === "n")
      {
        if (this.Board.Game.BlackMove)
        {
          data[dataIndex++] = "B";
        }
        else
        {
          data[dataIndex++] = "W";
        };
        data[dataIndex++] = [XY];
        this.Board.Game.SGFMoveIndex = this.SGFParser.Tree.AddNode(
          data,
          CurrentIndexTree
        );
      };
      // создание вариантов хода для текущего узла
      this.BuildCurentVariants(this.Board.Game.SGFMoveIndex);
      // вносим изменения на доску для текущего узла
      this.TrueChangesOnBoard(this.Board.Game.SGFMoveIndex);
    };
    /*********/


    /****m* SmallGoEditor/TEditor.TrueChangesOnBoard
     * NAME
     *    TrueChangesOnBoard — вносит изменения на доску
     * FUNCTION
     *    Этот метод выполняет все ходы текущей ветки от корня до заданного
     *    узла.
     * INPUTS
     *    {Number} Index —— индекс узла
     * RESULT
     *    -
     * SOURCE
     */
    this.TrueChangesOnBoard = function(Index)
    {
      this.Board.Clear(); // чистим доску
      var Stack = new Array(); // создаём стек
      var i = Index;
      var j = 0;
      // формирование списка узлов в стеке
      while(i >= 0)
      {
        Stack[j++] = i;
        i = this.SGFParser.Tree.Nodes[i].Parent;
      };
      var res = "";
      // последовательное внесение изменений согласно узлам из стека
      while(j > 0)
      {
        this.Board.ClearLabels();
        this.SGFMove(Stack[--j]);
      };
      // Вывод комментариев
      this.Board.Game.Cur_C = this.SGFParser.Tree.Nodes[Index].C;
      // показываем доску
      this.Board.Show();
    };
    /*********/


    /****m* SmallGoEditor/TEditor.SGFMove
     * NAME
     *    SGFMove — вносит изменения заданного узла на доску
     * FUNCTION
     *    Этот метод вносит все изменения на доску, описанные в заданном узле.
     * INPUTS
     *    {Number} Index —— индекс узла
     * RESULT
     *    -
     * SOURCE
     */
    this.SGFMove = function(Index)
    {
      var x;
      var y;
      // ставим чёрный камень если есть
      if (this.SGFParser.Tree.Nodes[Index].B != null)
      {
        x = this.Board.SGF_LtN(
              this.SGFParser.Tree.Nodes[Index].B[0].charAt(0)
            );
        y = this.Board.SGF_LtN(
              this.SGFParser.Tree.Nodes[Index].B[0].charAt(1)
            );
        this.Board.AddStone(x, y, "b");
      };
      // ставим белый камень если есть
      if (this.SGFParser.Tree.Nodes[Index].W != null)
      {
        x = this.Board.SGF_LtN(
              this.SGFParser.Tree.Nodes[Index].W[0].charAt(0)
            );
        y = this.Board.SGF_LtN(
              this.SGFParser.Tree.Nodes[Index].W[0].charAt(1)
            );
        this.Board.AddStone(x, y, "w");
      };
      // добавляем чёрные камни если есть
      if (this.SGFParser.Tree.Nodes[Index].AB != null)
      {
        for (var i = 0; i < this.SGFParser.Tree.Nodes[Index].AB.length; i++)
        {
          x = this.Board.SGF_LtN(
                this.SGFParser.Tree.Nodes[Index].AB[i].charAt(0)
              );
          y = this.Board.SGF_LtN(
                this.SGFParser.Tree.Nodes[Index].AB[i].charAt(1)
              );
          this.Board.AddStone(x, y, "b");
        };
      };
      // добавляем белые камни если есть
      if (this.SGFParser.Tree.Nodes[Index].AW != null)
      {
        for (var i = 0; i < this.SGFParser.Tree.Nodes[Index].AW.length; i++)
        {
          x = this.Board.SGF_LtN(
                this.SGFParser.Tree.Nodes[Index].AW[i].charAt(0)
              );
          y = this.Board.SGF_LtN(
                this.SGFParser.Tree.Nodes[Index].AW[i].charAt(1)
              );
          this.Board.AddStone(x, y, "w");
        };
      };
      // добавляем метки (Label) если есть
      if (this.SGFParser.Tree.Nodes[Index].LB != null)
      {
        for (var i = 0; i < this.SGFParser.Tree.Nodes[Index].LB.length; i++)
        {
          x = this.Board.SGF_LtN(
                this.SGFParser.Tree.Nodes[Index].LB[i].charAt(0)
              );
          y = this.Board.SGF_LtN(
                this.SGFParser.Tree.Nodes[Index].LB[i].charAt(1)
              );
          this.Board.AddLabel(
            x,
            y,
            this.SGFParser.Tree.Nodes[Index].LB[i].charAt(3)
          );
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TEditor.BuildCurentVariants
     * NAME
     *    BuildCurentVariants — строит варианты хода
     * FUNCTION
     *    Этот метод строит HTML код вариантов хода для родителя заданного
     *    узла, и выводит его на вэб-страницу.
     * INPUTS
     *    {Number} Index —— индекс узла
     * RESULT
     *    -
     * SOURCE
     */
    this.BuildCurentVariants = function(Index)
    {
      var result = "<select class='Options'\
                            size='1'\
                            id='CurentVariant'\
                            onchange='Editor.ShowVariant();'>";
      // варианты ходов строим на основе детей родителя данного узла
      Index = this.SGFParser.Tree.Nodes[Index].Parent;
      if (Index > -1)
      {
        // строим вариант для каждого ребёнка родительского узла
        for (var i = 0;
             i < this.SGFParser.Tree.Nodes[Index].Children.length;
             i++)
        {
          if (i === 0) // выбран первый узел
          {
            result += "<option selected value=\"" +
              this.SGFParser.Tree.Nodes[Index].Children[i] + "\">" +
              this.SGFParser.Tree.Nodes[Index].Children[i] + "</option>";
          }
          else
          {
            result += "<option value=\"" +
              this.SGFParser.Tree.Nodes[Index].Children[i] + "\">" +
              this.SGFParser.Tree.Nodes[Index].Children[i] + "</option>";
          };
        };
      };
      // если есть варианты, пишем об этом пользователю
      if (i > 1)
      {
        result += "</select>&lt;&lt;&lt; есть варианты текущего хода";
      }
      else
      {
        result += "</select>";
      };
      // выводим результат на вэб-страницу
      document.all.item('Variants').innerHTML = result;
    };
    /*********/


    /****m* SmallGoEditor/TEditor.NextMove
     * NAME
     *    NextMove — переходит к следующему узлу
     * FUNCTION
     *    Этот метод выполняет переход к следующему узлу, и запускает
     *    его отрисовку.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.NextMove = function()
    {
      // текущий узел
      var Index = this.Board.Game.SGFMoveIndex;
      // если есть дети у текущего узла
      if (this.SGFParser.Tree.Nodes[Index].Children[0] != undefined)
      {
        // переходим к первому ребёнку
        this.Board.Game.SGFMoveIndex =
          this.SGFParser.Tree.Nodes[Index].Children[0];
        // строим варианты
        this.BuildCurentVariants(this.Board.Game.SGFMoveIndex);
        // вносим изменения на доску
        this.TrueChangesOnBoard(this.Board.Game.SGFMoveIndex);
      };
    };
    /*********/


    /****m* SmallGoEditor/TEditor.PrevMove
     * NAME
     *    PrevMove — переходит к предыдущему узлу
     * FUNCTION
     *    Этот метод выполняет переход к предыдущему узлу, и запускает
     *    его отрисовку.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.PrevMove = function()
    {
      // если текущий узел не корень
      if (this.Board.Game.SGFMoveIndex > 0)
      {
        // переходим к его родителю
        this.Board.Game.SGFMoveIndex =
          this.SGFParser.Tree.Nodes[this.Board.Game.SGFMoveIndex].Parent;
        // строим варианты
        this.BuildCurentVariants(this.Board.Game.SGFMoveIndex);
        // вносим изменения на доску
        this.TrueChangesOnBoard(this.Board.Game.SGFMoveIndex);
      };
    };
    /*********/


    /****m* SmallGoEditor/TEditor.LastMove
     * NAME
     *    LastMove — переходит к последнему узлу
     * FUNCTION
     *    Этот метод выполняет переход к последнему узлу, и запускает
     *    его отрисовку.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.LastMove = function()
    {
      // текущий узел
      var Index = this.Board.Game.SGFMoveIndex;
      // пока есть дети у текущего узла
      while (this.SGFParser.Tree.Nodes[Index].Children[0] != undefined)
      {
        // переходим к следующему ребёнку
        Index = this.SGFParser.Tree.Nodes[Index].Children[0];
      };
      if (Index != this.Board.Game.SGFMoveIndex)
      {
        // переходим к последнему узлу
        this.Board.Game.SGFMoveIndex = Index;
        // строим варианты
        this.BuildCurentVariants(this.Board.Game.SGFMoveIndex);
        // вносим изменения на доску
        this.TrueChangesOnBoard(this.Board.Game.SGFMoveIndex);
      };
    };
    /*********/


    /****m* SmallGoEditor/TEditor.FirstMove
     * NAME
     *    FirstMove — переходит к первому узлу
     * FUNCTION
     *    Этот метод выполняет переход к первому узлу, и запускает
     *    его отрисовку.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.FirstMove = function()
    {
      // текущий узел
      var Index = this.Board.Game.SGFMoveIndex;
      // пока есть родители у текущего узла
      while (this.SGFParser.Tree.Nodes[Index].Parent != -1)
      {
        // переходим к родителю
        Index = this.SGFParser.Tree.Nodes[Index].Parent;
      };
      if (Index != this.Board.Game.SGFMoveIndex)
      {
        // переходим к первому узлу
        this.Board.Game.SGFMoveIndex = Index;
        // строим варианты
        this.BuildCurentVariants(this.Board.Game.SGFMoveIndex);
        // вносим изменения на доску
        this.TrueChangesOnBoard(this.Board.Game.SGFMoveIndex);
      };
    };
    /*********/


    /****m* SmallGoEditor/TEditor.ShowVariant
     * NAME
     *    ShowVariant — переходит к другому варианту хода
     * FUNCTION
     *    Этот метод выполняет переход к другому варианту хода.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.ShowVariant = function()
    {
      if (document.all.item('CurentVariant').value != "")
      {
        // переходим к варианту
        this.Board.Game.SGFMoveIndex =
          document.all.item('CurentVariant').value - 0;
        // вносим изменения на доску
        this.TrueChangesOnBoard(this.Board.Game.SGFMoveIndex);
      };
    };
    /*********/


    /****m* SmallGoEditor/TEditor.ShowOptions
     * NAME
     *    ShowOptions — выводит на вэб-страницу форму настроек
     * FUNCTION
     *    Этот метод выполняет вывод на вэб-страницу форму настроек для новой
     *    SGF.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.ShowOptions = function()
    {
      var result;
      if (document.all.item('Options').innerHTML == "")
      {
        result = "\
          <table class='Options'>\
          <tr><td>Board Size</td><td><select  class='Options' id='BoardSize'><option value=19>19 X 19</option><option value=13>13 X 13</option><option value=9>9 X 9</option></select></td></tr>\
          <tr><td>Player Black</td><td><input class='Options' type='text' size=20 id='oPB' value='Игрок 1'></td></tr>\
          <tr><td>Black rank</td>  <td><input class='Options' type='text' size=20 id='oBR' value='30 кю'>  </td></tr>\
          <tr><td>Black team</td>  <td><input class='Options' type='text' size=20 id='oBT' value=''>       </td></tr>\
          <tr><td>Player White</td><td><input class='Options' type='text' size=20 id='oPW' value='Игрок 2'></td></tr>\
          <tr><td>White rank</td>  <td><input class='Options' type='text' size=20 id='oWR' value='30 кю'>  </td></tr>\
          <tr><td>White team</td>  <td><input class='Options' type='text' size=20 id='oWT' value=''>       </td></tr>\
          <tr><td>Annotation</td>  <td><input class='Options' type='text' size=20 id='oAN' value=''>       </td></tr>\
          <tr><td>Date</td>        <td><input class='Options' type='text' size=20 id='oDT' value=''>       </td></tr>\
          <tr><td>Event</td>       <td><input class='Options' type='text' size=20 id='oEV' value=''>       </td></tr>\
          <tr><td>Result</td>      <td><input class='Options' type='text' size=20 id='oRE' value=''>       </td></tr>\
          <tr><td>Round</td>       <td><input class='Options' type='text' size=20 id='oRO' value=''>       </td></tr>\
          <tr><td>Rules</td>       <td><input class='Options' type='text' size=20 id='oRU' value=''>       </td></tr>\
          <tr><td>Source</td>      <td><input class='Options' type='text' size=20 id='oSO' value=''>       </td></tr>\
          <tr><td>User</td>        <td><input class='Options' type='text' size=20 id='oUS' value=''>       </td></tr>\
          <tr><td>Copyright</td>   <td><input class='Options' type='text' size=20 id='oCP' value=''>       </td></tr>\
          <tr><td>Application</td> <td><input class='Options' type='text' size=20 id='oAP' value='Small Go Editor dolu.planetario.ru/sge'></td></tr>\
          </table>\
          ";
      }
      else
      {
        result = "";
      };
      document.all.item('Options').innerHTML = result;
    };
    /*********/

};
