//////////////////////////////////////////////////////////////////////////////
// ����� SGF ������                                                         //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TSGFParser
 * NAME
 *    ����� TSGFParser � SGF ������
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *    �����, ����������� SGF ������
 * AGGREGATION
 *    {TTree} Tree �� SGF ������
 * PROPERTIES
 *    {String}  SGF      �� SGF �����
 *    {Integer} IndexSGF �� ����� ��������� �� ������ � ������ SGF, �������
 *                          ����� ��������
 * METHODS
 *    {Void}   BuildTree �� ��������� ������ (�������� �����)
 *    {Void}   Properties �� ������ ������� SGF ����
 *    {String} ReadData �� ������ ������ ��� �������
 *    {String} BuildSGF �� ������ SGF �� ������ ���������� ������
 * INPUTS
 *    -
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TSGFParser()
{
    this.Tree = new TTree();

    this.SGF;
    this.IndexSGF = 0;


    /****m* SmallGoEditor/TSGFParser.BuildTree
     * NAME
     *    BuildTree � ��������� ������ (�������� �����)
     * FUNCTION
     *    ���� ����� ������ ������ � ��������� ��� �������, ������� ��� ����
     *    ������ ������ ������� ������.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.BuildTree = function()
    {
      // ���� ���������� �� ������������ ������
      var IndexStack = [];
      var CurrentIndexTree = -1;
      var ch;
      var data = "";
      var end = false;
      do
      {
        if (this.IndexSGF < this.SGF.length)
        {
          // ������ ������ �� SGF
          ch = this.SGF.charAt(this.IndexSGF++);
          switch (ch)
          {
            case "(": // ����� ������
              IndexStack.push(CurrentIndexTree);
              break;
            case ";": // ����� ����
              data = this.Properties();
              CurrentIndexTree = this.Tree.AddNode(data, CurrentIndexTree);
              break;
            case ")": // ������ �����������
              CurrentIndexTree = IndexStack.pop();
              break;
          };
        }
        else
        {
          end = true;
        };
      }
      while (!end);
    };
    /*********/


    /****m* SmallGoEditor/TSGFParser.Properties
     * NAME
     *    Properties � ������ ������� SGF ����
     * FUNCTION
     *    ���� ����� ������ ����� ������� � ��������� ����� ������ ������ ���
     *    ���.
     * INPUTS
     *    -
     * RESULT
     *    {Array} �� ������ � ������� ������ �������� ��� ����� �������, �
     *               �������� � ������� ������ ��� ���� �������
     * SOURCE
     */
    // ������ ������� ����
    this.Properties = function()
    {
      var result = [];
      var resultIndex = 0;
      var PropertyName = "";
      var PropertyValue;
      var ch;
      var end = false;
      var PName = true;
      do
      {
        // ������ ������ SGF
        ch = this.SGF.charAt(this.IndexSGF++);
        switch (ch)
        {
          case "[": // ������ �������� ��������
            if (!PName)
            {
              resultIndex--;
              resultIndex--;
              PropertyValue.push(this.ReadData());
            }
            else
            {
              PropertyValue = [this.ReadData()];
              PName = false;
            };
            break;
          case "]": // ����� �������� ��������
            result[resultIndex++] = PropertyName;
            result[resultIndex++] = PropertyValue;
            break;
          case "(":
            end = true;
            this.IndexSGF--;
            break;
          case ")":
            end = true;
            this.IndexSGF--;
            break;
          case ";":
            end = true;
            this.IndexSGF--;
            break;
          case "\n":
            break;
          case "\r":
            break;
          case " ":
            break;
          default: // ������ ������ (�������� �������)
            if (!PName)
            {
              PName = true;
              PropertyName = "";
            };
            PropertyName += ch;
            break;
        };
      }
      while (!end);
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TSGFParser.ReadData
     * NAME
     *    ReadData � ������ ������ ��� �������
     * FUNCTION
     *    ���� ����� ������ ������ ��� ������� � ���������� ��.
     * INPUTS
     *    -
     * RESULT
     *    {String} �� ������� ������ ��� ��������
     * SOURCE
     */
    this.ReadData = function()
    {
      var result = "";
      do
      {
        // ������ ������ SGF
        ch = this.SGF.charAt(this.IndexSGF++);
        switch (ch)
        {
          case "]":
            this.IndexSGF--;
            break;
          default:
            result += ch;
            break;
        };
      }
      while (ch != "]");
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TSGFParser.BuildSGF
     * NAME
     *    BuildSGF � ������ SGF �� ������ ���������� ������
     * FUNCTION
     *    ���� ����� ������ � ���������� SGF �� ������ ���������� ������.
     * INPUTS
     *    -
     * RESULT
     *    {String} �� ����� SGF ������
     * SOURCE
     */
    this.BuildSGF = function()
    {
      var result = "(";
      for (var i = 0; i < this.Tree.Index; i++)
      {
        result += ";";
        result += this.Tree.Nodes[i].SGF();
        if (this.Tree.Nodes[i].Children.length > 1)
        {
          result += "(";
        }
        else if (this.Tree.Nodes[i].Children.length === 0)
        {
          result += ")";
        };
      };
      return result;
    };
    /*********/

};
