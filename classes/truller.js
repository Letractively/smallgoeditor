//////////////////////////////////////////////////////////////////////////////
// ����� ������������ �������                                               //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TRuller
 * NAME
 *    ����� TRuller � ������������ �������
 * VERSION
 *    0.2 (07.06.2011)
 * FUNCTION
 *    �����, ����������� ���� ������ ������������ �������. ����� ����������
 *    ��� � ������������, ��� � � �������������� ��������.
 * PROPERTIES
 *    {Integer} Symbol �� ����� �������, ������� ����� ������������ �� �������
 *    {Char}    Type   �� ��� �������, ����� ����:
 *                        "v" � ������������ �������
 *                        "h" � �������������� �������
 * METHODS
 *    {String}  Show �� �������� ������ ������������ �������
 *    {String}  NtL �� ��������������� ����� � ������ ��� �������
 *    {Integer} LtN �� ��������������� ������ � ����� ��� �������
 * INPUTS
 *    {Integer} Symbol �� ����� ������������� �������
 *    {Char}    Type   �� ��� �������
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TRuller(Symbol, Type)
{
    this.Symbol = Symbol;
    this.Type   = Type;

    /****m* SmallGoEditor/TRuller.Show
     * NAME
     *    Show � �������� ������ ������������ �������
     * FUNCTION
     *    ���� ����� ��������� � ���������� ������, ��� ����������� �����
     *    ������ ������������ �������.
     * INPUTS
     *    -
     * RESULT
     *    {String} �� HTML-������ ��������������� ����� ���������� ������
     *                ������������ ������� �����
     * SOURCE
     */
    this.Show = function()
    {
      var result;
      if (this.Type === "v") // ���� ������� ������������
      {
        result = this.Symbol;
      }
      else // ���� ������� ��������������
      {
        result = this.NtL(this.Symbol);
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TRuller.NtL
     * NAME
     *    NtL � ��������������� ����� � ������ ��� �������
     * FUNCTION
     *    ���� ����� ���������� ������, ��������������� ����������� ������ ��
     *    ������� (�������� ������ i).
     * INPUTS
     *    {Integer} Num �� ����� ������
     * RESULT
     *    {String} �� ������ ������
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
     *    LtN � ��������������� ������ � ����� ��� �������
     * FUNCTION
     *    ���� ����� ���������� �����, ��������������� ������� �� ������
     *    ������� (�������� ������ i).
     * INPUTS
     *    {String} Letter �� ������ ������
     * RESULT
     *    {Integer} �� ����� ������
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
