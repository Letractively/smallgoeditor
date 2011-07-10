//////////////////////////////////////////////////////////////////////////////
// ����� ����� �� �����                                                     //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TPlace
 * NAME
 *    ����� TPlace � ��������� ����� �� �����
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *    �����, ����������� ����� �� �����, ����� ��������������� ��� ����������
 *    �����, ��� � �������� ������. ����� ����� ��������������� ����, ���� ���
 *    ������ �����. �� �� ����� ���� ����� �����.
 * PROPERTIES
 *    {String} Type �� ��� ����� ����� ����:
 *                       "lt" � ����� ������� ����
 *                       "t"  � ������� �������
 *                       "rt" � ������ ������� ����
 *                       "r"  � ������ �������
 *                       "rb" � ������ ������ ����
 *                       "b"  � ������ �������
 *                       "lb" � ����� ������ ����
 *                       "l"  � ����� �������
 *                       "c"  � ����������� �����
 *                       "d"  � ����� � ������ �����
 *    {String}  XY �� ���������� ����� �� �����, ������� �� ���� ��������a..z
 *    {Char}    Stone �� ����������� ����� �� �����, ����� ����:
 *                         "n" � ����� ������
 *                         "b" � �� ����� ������ ������
 *                         "w" � �� ����� ����� ������
 *    {Boolean} StoneLast �� ������ ��� ��������� �� ����� ���������
 *    {Boolean} Check  �� ����� ��� ��������� ��������, ������������ ���
 *                        ����������� ������ ����� ������
 * METHODS
 *    {String} Show �� �������� �����
 * INPUTS
 *    {String} Type �� ��� �����
 *    {String} XY   �� ���������� �����
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
     *    Show � �������� �����
     * FUNCTION
     *    ���� ����� ��������� � ���������� HTML ������, ��� �����������
     *    �����, �������� ��� ���������.
     * INPUTS
     *    -
     * RESULT
     *    {String} �� HTML-������ ��������������� ������ ����������� ����� ��
     *                �����
     * SOURCE
     */
    this.Show = function()
    {
      var result = "";
      // ���� � ���� ������ ��� �����
      if (this.Label === "")
      {
        // ���������� ������ � ������ �� �����
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
        // ���������� ������ � ����� �� ���� ������
        switch (this.Stone)
        {
          case "b":
            if (this.StoneLast) // ���� ��� ��� ��������� ���
            {
              result += "<img src='pics/blacklast.gif'>";
            }
            else // ������� ������ ������
            {
              result += "<img src='pics/black.gif'>";
            };
            break;
          case "w":
            if (this.StoneLast) // ���� ��� ��� ��������� ���
            {
              result += "<img src='pics/whitelast.gif'>";
            }
            else // ������� ����� ������
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
      else // ���� �� �� � ���� ������ ����� ����
      {
        result =  "<td background='pics/empty.gif'>"; // �� ������ �����
        result += "<b>" + this.Label + "</b>"; // ������ �����
      };
      return result + "</td>";
    };
    /*********/
};
