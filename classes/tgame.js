//////////////////////////////////////////////////////////////////////////////
// ����� ����                                                               //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TGame
 * NAME
 *    ����� TGame � ��������� ����
 * VERSION
 *    0.3 (20.06.2011)
 * FUNCTION
 *    �����, ����������� �������� ��������� ���� (������).
 * PROPERTIES
 *    {Integer} SGFMoveIndex �� ������ �������� ����
 *    {Integer} WCaptured    �� ����� �����
 *    {Integer} BCaptured    �� ������ �����
 *    {Boolean} BlackMove    �� ��� ������ ��� ��� (true - ��)
 *    {String}  AN           �� Annotation
 *    {String}  BR           �� Black rank
 *    {String}  BT           �� Black team
 *    {String}  CP           �� Copyright
 *    {String}  DT           �� Date
 *    {String}  EV           �� Event
 *    {String}  GC           �� Game comment
 *    {String}  GN           �� Game name
 *    {String}  ON           �� Opening
 *    {String}  OT           �� Overtime
 *    {String}  PB           �� Player Black
 *    {String}  PC           �� Place
 *    {String}  PW           �� Player White
 *    {String}  RE           �� Result
 *    {String}  RO           �� Round
 *    {String}  RU           �� Rules
 *    {String}  SO           �� Source
 *    {String}  TM           �� Timelimit
 *    {String}  US           �� User
 *    {String}  WR           �� White rank
 *    {String}  WT           �� White team
 *    {String}  Cur_C        �� Comment
 * METHODS
 *    {String} Show �� ���������� ���������� � ������
 * INPUTS
 *    {Integer} Symbol �� ����� ������������� �������
 *    {Char}    Type   �� ��� �������
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TGame()
{
    this.SGFMoveIndex = 0;
    this.WCaptured    = 0;
    this.BCaptured    = 0;
    this.BlackMove    = true;

    this.Cur_C = null;
    this.AN    = null;
    this.BR    = null;
    this.BT    = null;
    this.CP    = null;
    this.DT    = null;
    this.EV    = null;
    this.GC    = null;
    this.GN    = null;
    this.ON    = null;
    this.OT    = null;
    this.PB    = null;
    this.PC    = null;
    this.PW    = null;
    this.RE    = null;
    this.RO    = null;
    this.RU    = null;
    this.SO    = null;
    this.TM    = null;
    this.US    = null;
    this.WR    = null;
    this.WT    = null;


    /****m* SmallGoEditor/TGame.Show
     * NAME
     *    Show � ���������� ���������� � ������
     * FUNCTION
     *    ���� ����� ��������� � ���������� HTML ��� � ����������� � ������.
     * INPUTS
     *    -
     * RESULT
     *    {String} �� HTML ��� � ����������� � ������
     * SOURCE
     */
    this.Show = function()
    {
      var result = "";
      // ������� ��� ���
      result += "<tr>";
      result += "<td>���:</td>";
      if (this.BlackMove)
      {
        result += "<td>������</td>"
      }
      else
      {
        result += "<td>�����</td>"
      };
      result += "</tr>";
      // SGF ����
      result += "<tr>";
      result += "<td>����� ���� � SGF:</td>";
      result += "<td>" + this.SGFMoveIndex + "</td>"
      result += "</tr>";
      // ������� ����������� ������� ������
      result += "<tr>";
      result += "<td>׸���� �����:</td>";
      result += "<td>" + this.BCaptured + "</td>"
      result += "</tr>";
      result += "<tr>";
      result += "<td>����� �����:</td>";
      result += "<td>" + this.WCaptured + "</td>"
      result += "</tr>";
      // ����� �����������
      if (this.Cur_C != null)
      {
        result += "<tr><td valign='top'>Comments:</td><td><textarea class='Options' id='CommentArea' rows=10 cols=45>" + this.Cur_C + "</textarea></td></tr>";
      }
      else
      {
        result += "<tr><td valign='top'>Comments:</td><td><textarea class='Options' id='CommentArea' rows=10 cols=45></textarea></td></tr>";
      };
      // ����� SGF ������
      if (this.GN != null) {result += "<tr><td>Game name:</td><td>"    + this.GN + "</td></tr>";};
      if (this.GC != null) {result += "<tr><td>Game comment:</td><td>" + this.GC + "</td></tr>";};
      if (this.AN != null) {result += "<tr><td>Annotation:</td><td>"   + this.AN + "</td></tr>";};
      if (this.DT != null) {result += "<tr><td>Date:</td><td>"         + this.DT + "</td></tr>";};
      if (this.CP != null) {result += "<tr><td>Copyright:</td><td>"    + this.CP + "</td></tr>";};
      if (this.PB != null) {result += "<tr><td>Player Black:</td><td>" + this.PB + "</td></tr>";};
      if (this.BR != null) {result += "<tr><td>Black rank:</td><td>"   + this.BR + "</td></tr>";};
      if (this.BT != null) {result += "<tr><td>Black team:</td><td>"   + this.BT + "</td></tr>";};
      if (this.PW != null) {result += "<tr><td>Player White:</td><td>" + this.PW + "</td></tr>";};
      if (this.WR != null) {result += "<tr><td>White rank:</td><td>"   + this.WR + "</td></tr>";};
      if (this.WT != null) {result += "<tr><td>White team:</td><td>"   + this.WT + "</td></tr>";};
      if (this.RE != null) {result += "<tr><td>Result:</td><td>"       + this.RE + "</td></tr>";};
      if (this.TM != null) {result += "<tr><td>Timelimit:</td><td>"    + this.TM + "</td></tr>";};
      if (this.EV != null) {result += "<tr><td>Event:</td><td>"        + this.EV + "</td></tr>";};
      if (this.ON != null) {result += "<tr><td>Opening:</td><td>"      + this.ON + "</td></tr>";};
      if (this.OT != null) {result += "<tr><td>Overtime:</td><td>"     + this.OT + "</td></tr>";};
      if (this.PC != null) {result += "<tr><td>Place:</td><td>"        + this.PC + "</td></tr>";};
      if (this.RO != null) {result += "<tr><td>Round:</td><td>"        + this.RO + "</td></tr>";};
      if (this.RU != null) {result += "<tr><td>Rules:</td><td>"        + this.RU + "</td></tr>";};
      if (this.SO != null) {result += "<tr><td>Source:</td><td>"       + this.SO + "</td></tr>";};
      if (this.US != null) {result += "<tr><td>User:</td><td>"         + this.US + "</td></tr>";};
      return result;
    };
    /*********/

};
