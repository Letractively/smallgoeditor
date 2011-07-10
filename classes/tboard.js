//////////////////////////////////////////////////////////////////////////////
//  ласс ƒќ— ј                                                              //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TBoard
 * NAME
 *     ласс TBoard Ч описывает доску
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *     ласс, описывающий доску как единую сущность
 * PROPERTIES
 *    {Integer} Size ЧЧ размер доски
 * AGGREGATION
 *    {TGame}   Game    ЧЧ игра
 *    {TPlace}  Places  ЧЧ место на доске под один камень
 *    {TRuller} HRuller ЧЧ горизонтальна€ линейка
 *    {TRuller} VRuller ЧЧ вертикальна€ линейка
 * METHODS
 *    {Char}   SGF_NtL ЧЧ переводит число в символьную координату SGF
 *    {Number} SGF_LtN ЧЧ переводит символьную координату SGF в число
 *    {Void}   Show ЧЧ строит и выводит доску
 *    {Void}   Clear ЧЧ отчистка доски от камней
 *    {Void}   ClearLabels ЧЧ отчистка доски от меток (Label)
 *    {Void}   Info ЧЧ вывод общей информации
 *    {Void}   CheckDead ЧЧ проверка на мЄртвые камни
 *    {Number} DeadStones ЧЧ рекурсивна€ проверка мЄртвых камней
 *    {Void}   KillStone ЧЧ снимаем камень с доски
 *    {Void}   KillStones ЧЧ снимаем группу камней с доски
 *    {Void}   AddStone ЧЧ добавл€ет камень на доску
 *    {Void}   LastStone ЧЧ метит последний поставленный камень
 *    {Void}   AddLabel ЧЧ добавл€ет метку (Label) на доску
 * INPUTS
 *    {Integer} Size ЧЧ размер доски (максимальное значение: 19)
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TBoard(Size)
{
    this.Size = Size;

    this.Game = new TGame();

    this.Places  = new Array;
    this.HRuller = new Array;
    this.VRuller = new Array;


    /****m* SmallGoEditor/TBoard.SGF_NtL
     * NAME
     *    SGF_NtL Ч переводит число в символьную координату SGF
     * FUNCTION
     *    Ётот метод возвращает символьную координату соответствующую
     *    пор€дковому номеру.
     * INPUTS
     *    {Number} Num ЧЧ пор€дковый номер координаты
     * RESULT
     *    {Char} ЧЧ символьна€ координата SGF
     * SOURCE
     */
    this.SGF_NtL = function(Num)
    {
      var result = "";
      switch (Num)
      {
        case 1: result  = "a"; break;
        case 2: result  = "b"; break;
        case 3: result  = "c"; break;
        case 4: result  = "d"; break;
        case 5: result  = "e"; break;
        case 6: result  = "f"; break;
        case 7: result  = "g"; break;
        case 8: result  = "h"; break;
        case 9: result  = "i"; break;
        case 10: result = "j"; break;
        case 11: result = "k"; break;
        case 12: result = "l"; break;
        case 13: result = "m"; break;
        case 14: result = "n"; break;
        case 15: result = "o"; break;
        case 16: result = "p"; break;
        case 17: result = "q"; break;
        case 18: result = "r"; break;
        case 19: result = "s"; break;
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TBoard.SGF_LtN
     * NAME
     *    SGF_LtN Ч переводит символьную координату SGF в число
     * FUNCTION
     *    Ётот метод возвращает пор€дковый номер символьной координаты SGF.
     * INPUTS
     *    {Char} Letter ЧЧ символьна€ координата SGF
     * RESULT
     *    {Number} ЧЧ пор€дковый номер координаты
     * SOURCE
     */
    this.SGF_LtN = function(Letter)
    {
      var result = 0;
      switch (Letter)
      {
        case "a": result = 1;  break;
        case "b": result = 2;  break;
        case "c": result = 3;  break;
        case "d": result = 4;  break;
        case "e": result = 5;  break;
        case "f": result = 6;  break;
        case "g": result = 7;  break;
        case "h": result = 8;  break;
        case "i": result = 9;  break;
        case "j": result = 10;  break;
        case "k": result = 11; break;
        case "l": result = 12; break;
        case "m": result = 13; break;
        case "n": result = 14; break;
        case "o": result = 15; break;
        case "p": result = 16; break;
        case "q": result = 17; break;
        case "r": result = 18; break;
        case "s": result = 19; break;
      };
      return result;
    };
    /*********/


    // +ЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧ+
    // | ќЌ—“–” “ќ– (построение доски)|
    // +ЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧ+
    for (var x = 1; x <= Size; x++)
    {
      this.Places[x] = new Array; // создаЄм двумерный массив
      this.HRuller[x] = new TRuller(x, "h");
      this.VRuller[x] = new TRuller(x, "v");
      for (var y = 1; y <= Size; y++)
      {
        if (x === 1)
        {
          if (y === 1)
          {
            // левый верхний угол
            this.Places[x][y] = new TPlace(
              "lt",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else if (y === Size)
          {
            // левый нижний угол
            this.Places[x][y] = new TPlace(
              "lb",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else
          {
            // лева€ сторона
            this.Places[x][y] = new TPlace(
              "l",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          };
        }
        else if (x === Size)
        {
          if (y === 1)
          {
            // правый верхний угол
            this.Places[x][y] = new TPlace(
              "rt",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else if (y === Size)
          {
            // правый нижний угол
            this.Places[x][y] = new TPlace(
              "rb",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else
          {
            // права€ сторона
            this.Places[x][y] = new TPlace(
              "r",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          };
        }
        else
        {
          if (y === 1)
          {
            // верх доски
            this.Places[x][y] = new TPlace(
              "t",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else if (y === Size)
          {
            // низ доски
            this.Places[x][y] = new TPlace(
              "b",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else
          {
            // отображение стандартных хоси на доске 19*19
            if ((this.Size === 19) && (this.Size === 19))
            {
              // рисуем хоси
              if ( ( (x === 4)  && (y === 4)  ) ||
                   ( (x === 4)  && (y === 10) ) ||
                   ( (x === 4)  && (y === 16) ) ||
                   ( (x === 10) && (y === 4)  ) ||
                   ( (x === 10) && (y === 10) ) ||
                   ( (x === 10) && (y === 16) ) ||
                   ( (x === 16) && (y === 4)  ) ||
                   ( (x === 16) && (y === 10) ) ||
                   ( (x === 16) && (y === 16) ) )
              {
                this.Places[x][y] = new TPlace(
                  "d",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              }
              // рисуем перекрестие
              else
              {
                this.Places[x][y] = new TPlace(
                  "c",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              };
            }
            // отображение стандартных хоси на доске 13*13
            else if ((this.Size === 13) && (this.Size === 13))
            {
              // рисуем хоси
              if ( ( (x === 4)  && (y === 4)  ) ||
                   ( (x === 4)  && (y === 7)  ) ||
                   ( (x === 4)  && (y === 10) ) ||
                   ( (x === 7)  && (y === 4)  ) ||
                   ( (x === 7)  && (y === 7)  ) ||
                   ( (x === 7)  && (y === 10) ) ||
                   ( (x === 10) && (y === 4)  ) ||
                   ( (x === 10) && (y === 7)  ) ||
                   ( (x === 10) && (y === 10) ) )
              {
                this.Places[x][y] = new TPlace(
                  "d",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              }
              // рисуем перекрестие
              else
              {
                this.Places[x][y] = new TPlace(
                  "c",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              };
            }
            // отображение стандартных хоси на доске 9*9
            else if ((this.Size === 9) && (this.Size === 9))
            {
              // рисуем хоси
              if ( ( (x === 3)  && (y === 3) ) ||
                   ( (x === 3)  && (y === 7) ) ||
                   ( (x === 5)  && (y === 5) ) ||
                   ( (x === 7)  && (y === 3) ) ||
                   ( (x === 7)  && (y === 7) ) )
              {
                this.Places[x][y] = new TPlace(
                  "d",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              }
              // рисуем перекрестие
              else
              {
                this.Places[x][y] = new TPlace(
                  "c",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              };
            }
            // нестандартна€ доска без хоси
            else
            {
              this.Places[x][y] = new TPlace(
                "c",
                this.SGF_NtL(x) + this.SGF_NtL(y)
              );
            };
          };
        };
      };
    };


    /****m* SmallGoEditor/TBoard.Show
     * NAME
     *    Show Ч строит и выводит доску
     * FUNCTION
     *    Ётот метод строит доку в формате HTML и выводит еЄ в соответствующее
     *    место на вэб-странице.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.Show = function()
    {
      var result =
        "<table id='MainTable' cellpadding=0 cellspacing=0 border=0>";
      // дл€ обратного индексировани€ вертикальных линеек
      var yRuller = this.Size + 1;
      for (var y = 0; y <= this.Size + 1; y++)
      {
        result += "<tr>";
        for (var x = 0; x <= this.Size + 1; x++)
        {
          // прорисовка горизонтальных линеек
          if ( ( (y === 0) || (y === this.Size + 1) ) &&
               (x != 0) &&
               (x != this.Size + 1) )
          {
            result += "<td>" + this.HRuller[x].Show() + "</td>";
          }
          // прорисовка вертикальных линеек
          else if ( ( (x === 0) || (x === this.Size + 1) ) &&
                    (y != 0)  &&
                    (y != this.Size + 1) )
          {
            result += "<td>" + this.VRuller[yRuller].Show() + "</td>";
          }
          // прорисовка перекресий
          else if ( (x != 0)             && (y != 0)            &&
                    (x != this.Size + 1) && (y != this.Size + 1) )
          {
            result += this.Places[x][y].Show();
          }
          // прорисовка пустого пространства
          else
          {
            result += "<td></td>";
          };
        };
        result += "</tr>";
        yRuller--;
      };
      result += "</table>";
      document.all.item("Board").innerHTML = result;
      this.Info();
    };
    /*********/


    /****m* SmallGoEditor/TBoard.Clear
     * NAME
     *    Clear Ч отчистка доски от камней
     * FUNCTION
     *    Ётот метод отмечает на доске все камни как "n", т.е. отсутствующие.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.Clear = function()
    {
      this.Game.WCaptured = 0;
      this.Game.BCaptured = 0;
      for (var y = 1; y <= this.Size; y++)
      {
        for (var x = 1; x <= this.Size; x++)
        {
          this.Places[x][y].Stone = "n";
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.ClearLabels
     * NAME
     *    ClearLabels Ч отчистка доски от меток (Label)
     * FUNCTION
     *    Ётот метод затирает все метки на всех €чейках доски.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.ClearLabels = function()
    {
      for (var y = 1; y <= this.Size; y++)
      {
        for (var x = 1; x <= this.Size; x++)
        {
          this.Places[x][y].Label = "";
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.Info
     * NAME
     *    Info Ч вывод общей информации
     * FUNCTION
     *    Ётот метод формирует и выводит на вэб-страницу общую информацию об
     *    игре.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.Info = function()
    {
      var result = "<table id='InfoTable' border=0>";
      result += this.Game.Show();
      // выводим размер доски
      result += "<tr>";
      result += "<td>–азмер доски:</td>";
      result += "<td>" + this.Size + " x " + this.Size + "</td>"
      result += "</tr>";
      result += "</table>";
      // результат на экран
      document.all.item('Info').innerHTML = result;
    };
    /*********/


    /****m* SmallGoEditor/TBoard.CheckDead
     * NAME
     *    CheckDead Ч проверка на мЄртвые камни
     * FUNCTION
     *    Ётот метод запускает проверку в рамках доски жива ли группа камней,
     *    если нет, то запускает метод снимающий эти камни.
     * INPUTS
     *    {Number} x     ЧЧ координата камн€-члена группы
     *    {Number} y     ЧЧ координата камн€-члена группы
     *    {Char}   color ЧЧ цвет группы
     * RESULT
     *    -
     * SOURCE
     */
    this.CheckDead = function(x, y, color)
    {
      // проверка в рамках доски
      if ( (x > 0)          && (y > 0)          &&
           (x <= this.Size) && (y <= this.Size) &&
           (this.Places[x][y].Stone != color)   )
      {
        if (color === "w") // если ходили белые
        {
          // провер€ем чЄрную группу
          result = this.DeadStones(x, y, "b");
        }
        else // если ходили белые
        {
          // пробер€ем чЄрную группу
          result = this.DeadStones(x, y, "w");
        };
        if (result === 1) // если группа мертва - снимаем еЄ с доски
        {
          this.KillStones(x, y, color);
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.DeadStones
     * NAME
     *    DeadStones Ч рекурсивна€ проверка мЄртвых камней
     * FUNCTION
     *    Ётот метод выполн€ет проверку в рамках доски жива ли группа камней,
     *    рекурсивно запуска€ себ€ дл€ каждого камн€ в группе.
     * INPUTS
     *    {Number} x     ЧЧ координата камн€-члена группы
     *    {Number} y     ЧЧ координата камн€-члена группы
     *    {Char}   color ЧЧ цвет группы
     * RESULT
     *    {Number} ЧЧ 0 - группа жива, есть хот€бы одно дыхание
     *                1 - группа мертва, дыханий нет
     * SOURCE
     */
    this.DeadStones = function(x, y, color)
    {
      var result = 1;
      // проверка в рамках доски
      if ( (x > 0)          && (y > 0)          &&
           (x <= this.Size) && (y <= this.Size) )
      {
        // если камень того же цвета и не помечен
        if ( (this.Places[x][y].Stone === color) &&
             (this.Places[x][y].Check !=  true)  )
        {
          this.Places[x][y].Check = true; // метим камень
          result = result && this.DeadStones(x + 1, y, color); // рекурсивно
          result = result && this.DeadStones(x - 1, y, color); // рекурсивно
          result = result && this.DeadStones(x, y + 1, color); // рекурсивно
          result = result && this.DeadStones(x, y - 1, color); // рекурсивно
          this.Places[x][y].Check = false; // снимаем метку
        }
        else if (this.Places[x][y].Stone === "n") // если есть дыхание
        {
          return 0;
        };
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TBoard.KillStone
     * NAME
     *    KillStone Ч снимаем камень с доски
     * FUNCTION
     *    Ётот метод снимает указанный камень с доски и увеличивает количество
     *    сн€тых камней этого цвета на 1.
     * INPUTS
     *    {Number} x ЧЧ координата камн€
     *    {Number} y ЧЧ координата камн€
     * RESULT
     *    -
     * SOURCE
     */
    this.KillStone = function(x, y)
    {
      if (this.Places[x][y].Stone === "b") // если камень чЄрный
      {
        this.Places[x][y].Stone = "n"; // затираем его
        this.Game.BCaptured++; // увеличиваем кол-во пленных чЄрных
      }
      else if (this.Places[x][y].Stone === "w") // если камень белый
      {
        this.Places[x][y].Stone = "n"; // затираем его
        this.Game.WCaptured++; // увеличиваем кол-во пленных белых
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.KillStones
     * NAME
     *    KillStones Ч снимаем группу камней с доски
     * FUNCTION
     *    Ётот метод, рекурсивно вызыва€ себ€, запускает метод снимающий
     *    камень с доски, таким образом снимает всю группу.
     * INPUTS
     *    {Number} x     ЧЧ координата камн€-члена группы
     *    {Number} y     ЧЧ координата камн€-члена группы
     *    {Char}   color ЧЧ цвет группы
     * RESULT
     *    -
     * SOURCE
     */
    this.KillStones = function(x, y, color)
    {
      // если камень в рамках доски
      if ( (x > 0) && (y > 0) && (x <= this.Size) && (y <= this.Size) )
      {
        // если цвет камн€ не совподает и это не пустое место
        if ( (this.Places[x][y].Stone != color) &&
             (this.Places[x][y].Stone != "n") )
        {
          this.KillStone(x, y); // мочим камень
          this.KillStones(x + 1, y, color); // рекурсивно
          this.KillStones(x - 1, y, color); // рекурсивно
          this.KillStones(x, y + 1, color); // рекурсивно
          this.KillStones(x, y - 1, color); // рекурсивно
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.AddStone
     * NAME
     *    AddStone Ч добавл€ет камень на доску
     * FUNCTION
     *    Ётот метод ставит камень на доку и запускает проверку, не по€вилось
     *    ли мЄртвых групп.
     * INPUTS
     *    {Number} x     ЧЧ координата камн€
     *    {Number} y     ЧЧ координата камн€
     *    {Char}   color ЧЧ цвет камн€
     * RESULT
     *    -
     * SOURCE
     */
    this.AddStone = function(x, y, color)
    {
      // ставим камень на доску
      this.Places[x][y].Stone = color;
      this.LastStone(x, y);
      this.CheckDead(x + 1, y, color); // провер€ем мЄртвые камни
      this.CheckDead(x - 1, y, color); // провер€ем мЄртвые камни
      this.CheckDead(x, y + 1, color); // провер€ем мЄртвые камни
      this.CheckDead(x, y - 1, color); // провер€ем мЄртвые камни
      //this.CheckDead(x, y, "w");
    };
    /*********/


    /****m* SmallGoEditor/TBoard.LastStone
     * NAME
     *    LastStone Ч метит последний поставленный камень
     * FUNCTION
     *    Ётот метод снимает метку последнего камн€ со всей доски и метит
     *    последний поставленный камень. “акже здесь определ€етс€ чей
     *    следующий ход.
     * INPUTS
     *    {Number} x_ ЧЧ координата камн€
     *    {Number} y_ ЧЧ координата камн€
     * RESULT
     *    -
     * SOURCE
     */
    this.LastStone = function(x_, y_)
    {
      // чистим все камни от меток последнего камн€
      for (var y = 1; y <= this.Size; y++)
      {
        for (var x = 1; x <= this.Size; x++)
        {
          this.Places[x][y].StoneLast = false;
        };
      };
      // собственно метим
      this.Places[x_][y_].StoneLast = true;
      // определ€ем чей следующий ход
      if (this.Places[x_][y_].Stone === "b")
      {
        this.Game.BlackMove = false;
      }
      else
      {
        this.Game.BlackMove = true;
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.AddLabel
     * NAME
     *    AddLabel Ч добавл€ет метку (Label) на доску
     * FUNCTION
     *    Ётот метод добавл€ет метку конкретной €чейке на доске.
     * INPUTS
     *    {Number} x     ЧЧ координата метки
     *    {Number} y     ЧЧ координата метки
     *    {Char}   Label ЧЧ символ метки
     * RESULT
     *    -
     * SOURCE
     */
    this.AddLabel = function(x, y, Label)
    {
      this.Places[x][y].Label = Label;
    };
    /*********/

};
