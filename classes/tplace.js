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
 *    {Integer} StoneSize �� ������ �����, ����� ���� 1 ��� 2
 * METHODS
 *    {String} Show �� �������� �����
 * INPUTS
 *    {String}  Type      �� ��� �����
 *    {String}  XY        �� ���������� �����
 *    {Integer} StoneSize �� ������ �����
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TPlace(Type, XY, StoneSize)
{
    this.Type      = Type;
    this.XY        = XY
    this.Stone     = "n";
    this.StoneLast = false;
    this.Check     = false;
    this.Label     = "";
    this.StoneSize = StoneSize;

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
      var path   = "";
      // ����� ����� � ���������� ���������������� �������
      switch (this.StoneSize)
      {
        case 1:
          path = "pics_s/";
        break;
        case 2:
          path = "pics_l/";
        break;
        default :
          path = "pics_s/";
      };
      // ���� � ���� ������ ��� �����
      if (this.Label === "")
      {
        // ���������� ������ � ������ �� �����
        switch (this.Type)
        {
          case "lt":
            result += "<td background='" + path + "/lt.gif'>";
            break;
          case "t":
            result += "<td background='" + path + "/t.gif'>";
            break;
          case "rt":
            result += "<td background='" + path + "/rt.gif'>";
            break;
          case "r":
            result += "<td background='" + path + "/r.gif'>";
            break;
          case "rb":
            result += "<td background='" + path + "/rb.gif'>";
            break;
          case "b":
            result += "<td background='" + path + "/b.gif'>";
            break;
          case "lb":
            result += "<td background='" + path + "/lb.gif'>";
            break;
          case "l":
            result += "<td background='" + path + "/l.gif'>";
            break;
          case "d":
            result += "<td background='" + path + "/d.gif'>";
            break;
          default:
            result += "<td background='" + path + "/c.gif'>";
            break;
        };
        // ���������� ������ � ����� �� ���� ������
        switch (this.Stone)
        {
          case "b":
            if (this.StoneLast) // ���� ��� ��� ��������� ���
            {
              result += "<img src='" + path + "/blacklast.gif'>";
            }
            else // ������� ������ ������
            {
              result += "<img src='" + path + "/black.gif'>";
            };
            break;
          case "w":
            if (this.StoneLast) // ���� ��� ��� ��������� ���
            {
              result += "<img src='" + path + "/whitelast.gif'>";
            }
            else // ������� ����� ������
            {
              result += "<img src='" + path + "/white.gif'>";
            };
            break;
          default:
            result += "<img src='" + path + "/empty.gif' \
                            onclick=\"Editor.MakeMove('" + this.XY +"');\">";
            break;
        };
      }
      else // ���� �� �� � ���� ������ ����� ����
      {
        result =  "<td background='" + path + "/empty.gif'>"; // �� ������ �����
        result += "<b>" + this.Label + "</b>"; // ������ �����
      };
      return result + "</td>";
    };
    /*********/
};
