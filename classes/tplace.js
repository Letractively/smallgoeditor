//////////////////////////////////////////////////////////////////////////////
//  ласс ћ≈—“ќ Ќј ƒќ— ≈                                                     //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TPlace
 * NAME
 *     ласс TPlace Ч описывает место на доске
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *     ласс, описывающий место на доске, может соответствовать как свободному
 *    месту, так и зан€тому камнем. “акже может соответствовать углу, краю или
 *    центру доски. Ќа нЄм может быть точка Ђхосиї.
 * PROPERTIES
 *    {String} Type ЧЧ тип места может быть:
 *                       "lt" Ч левый верхний угол
 *                       "t"  Ч верхн€€ сторона
 *                       "rt" Ч правый верхний угол
 *                       "r"  Ч права€ сторона
 *                       "rb" Ч правый нижний угол
 *                       "b"  Ч нижн€€ сторона
 *                       "lb" Ч левый нижний угол
 *                       "l"  Ч лева€ сторона
 *                       "c"  Ч центральное место
 *                       "d"  Ч место с точкой Ђхосиї
 *    {String}  XY ЧЧ координаты места на доске, состо€т из двух символовa..z
 *    {Char}    Stone ЧЧ присутствие камн€ на месте, может быть:
 *                         "n" Ч место пустое
 *                         "b" Ч на месте чЄрный камень
 *                         "w" Ч на месте белый камень
 *    {Boolean} StoneLast ЧЧ камень был поставлен на доску последним
 *    {Boolean} Check  ЧЧ метка дл€ алгоритма закраски, используетс€ дл€
 *                        определени€ мЄртвых групп камней
 * METHODS
 *    {String} Show ЧЧ показать место
 * INPUTS
 *    {String} Type ЧЧ тип места
 *    {String} XY   ЧЧ координаты места
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TPlace(Type, XY)
{
    this.Type      = Type;
    this.XY        = XY
    this.Stone     = "n";
    this.StoneLast = false;
    this.Check     = false;
    this.Label     = "";

    /****m* SmallGoEditor/TPlace.Show
     * NAME
     *    Show Ч показать место
     * FUNCTION
     *    Ётот метод формирует и возвращает HTML данные, дл€ отображени€
     *    места, согласно его свойствам.
     * INPUTS
     *    -
     * RESULT
     *    {String} ЧЧ HTML-данные соответствующие одному конкретному месту на
     *                доске
     * SOURCE
     */
    this.Show = function()
    {
      var result = "";
      // если в этой €чейки нет метки
      if (this.Label === "")
      {
        // ѕодготовка данных о €чейки на доске
        switch (this.Type)
        {
          case "lt":
            result = "<td background='pics/lt.gif'>";
            break;
          case "t":
            result = "<td background='pics/t.gif'>";
            break;
          case "rt":
            result = "<td background='pics/rt.gif'>";
            break;
          case "r":
            result = "<td background='pics/r.gif'>";
            break;
          case "rb":
            result = "<td background='pics/rb.gif'>";
            break;
          case "b":
            result = "<td background='pics/b.gif'>";
            break;
          case "lb":
            result = "<td background='pics/lb.gif'>";
            break;
          case "l":
            result = "<td background='pics/l.gif'>";
            break;
          case "d":
            result = "<td background='pics/d.gif'>";
            break;
          default:
            result = "<td background='pics/c.gif'>";
            break;
        };
        // подготовка данных о камне на этой €чейке
        switch (this.Stone)
        {
          case "b":
            if (this.StoneLast) // если это был последний ход
            {
              result += "<img src='pics/blacklast.gif'>";
            }
            else // простой чЄрный камень
            {
              result += "<img src='pics/black.gif'>";
            };
            break;
          case "w":
            if (this.StoneLast) // если это был последний ход
            {
              result += "<img src='pics/whitelast.gif'>";
            }
            else // простой белый камень
            {
              result += "<img src='pics/white.gif'>";
            };
            break;
          default:
            result += "<img src='pics/empty.gif' \
                            onclick=\"Editor.MakeMove('" + this.XY +"');\">";
            break;
        };
      }
      else // если всЄ же в этой €чейке метка есть
      {
        result =  "<td background='pics/empty.gif'>"; // на пустом месте
        result += "<b>" + this.Label + "</b>"; // символ метки
      };
      return result + "</td>";
    };
    /*********/
};
