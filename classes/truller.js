//////////////////////////////////////////////////////////////////////////////
//  ласс  ќќ–ƒ»Ќј“Ќјя Ћ»Ќ≈… ј                                               //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TRuller
 * NAME
 *     ласс TRuller Ч координатна€ линейка
 * VERSION
 *    0.2 (07.06.2011)
 * FUNCTION
 *     ласс, описывающий одну €чейку координатной линейки. ћожет относитьс€
 *    как к вертикальной, так и к горизонтальной линейкам.
 * PROPERTIES
 *    {Integer} Symbol ЧЧ номер символа, который будет отображатьс€ на линейке
 *    {Char}    Type   ЧЧ тип линейки, может быть:
 *                        "v" Ч вертикальна€ линейка
 *                        "h" Ч горизонтальна€ линейка
 * METHODS
 *    {String}  Show ЧЧ показать €чейку координатной линейки
 *    {String}  NtL ЧЧ преобразовывает число в символ дл€ линейки
 *    {Integer} LtN ЧЧ преобразовывает символ в число дл€ линейки
 * INPUTS
 *    {Integer} Symbol ЧЧ номер отображаемого символа
 *    {Char}    Type   ЧЧ тип линейки
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TRuller(Symbol, Type)
{
    this.Symbol = Symbol;
    this.Type   = Type;

    /****m* SmallGoEditor/TRuller.Show
     * NAME
     *    Show Ч показать €чейку координатной линейки
     * FUNCTION
     *    Ётот метод формирует и возвращает данные, дл€ отображени€ одной
     *    €чейки координатной линейки.
     * INPUTS
     *    -
     * RESULT
     *    {String} ЧЧ HTML-данные соответствующие одной конкретной €чейки
     *                координатной линейки доски
     * SOURCE
     */
    this.Show = function()
    {
      var result;
      if (this.Type === "v") // если линейка вертикальна€
      {
        result = this.Symbol;
      }
      else // если линейка горизонтальна€
      {
        result = this.NtL(this.Symbol);
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TRuller.NtL
     * NAME
     *    NtL Ч преобразовывает число в символ дл€ линейки
     * FUNCTION
     *    Ётот метод возвращает символ, соответствующий определЄнной €чейки на
     *    линейке (пропущен символ i).
     * INPUTS
     *    {Integer} Num ЧЧ номер €чейки
     * RESULT
     *    {String} ЧЧ символ €чейки
     * SOURCE
     */
    this.NtL = function(Num)
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
        case 9: result  = "j"; break;
        case 10: result = "k"; break;
        case 11: result = "l"; break;
        case 12: result = "m"; break;
        case 13: result = "n"; break;
        case 14: result = "o"; break;
        case 15: result = "p"; break;
        case 16: result = "q"; break;
        case 17: result = "r"; break;
        case 18: result = "s"; break;
        case 19: result = "t"; break;
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TRuller.LtN
     * NAME
     *    LtN Ч преобразовывает символ в число дл€ линейки
     * FUNCTION
     *    Ётот метод возвращает номер, соответствующий символу на €чейке
     *    линейки (пропущен символ i).
     * INPUTS
     *    {String} Letter ЧЧ символ €чейки
     * RESULT
     *    {Integer} ЧЧ номер €чейки
     * SOURCE
     */
    this.LtN = function(Letter)
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
        case "j": result = 9;  break;
        case "k": result = 10; break;
        case "l": result = 11; break;
        case "m": result = 12; break;
        case "n": result = 13; break;
        case "o": result = 14; break;
        case "p": result = 15; break;
        case "q": result = 16; break;
        case "r": result = 17; break;
        case "s": result = 18; break;
        case "t": result = 19; break;
      };
      return result;
    };
    /*********/

};
