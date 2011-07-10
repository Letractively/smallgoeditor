//////////////////////////////////////////////////////////////////////////////
// ����� ������                                                             //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TTree
 * NAME
 *    ����� TTree � ������ SGF
 * VERSION
 *    0.2 (07.06.2011)
 * FUNCTION
 *    �����, ����������� ������ ����� SGF
 * AGGREGATION
 *    {Array}   Nodes �� ������ ����� (�������� TNode)
 * PROPERTIES
 *    {Integer} Index �� ���-�� �����
 * METHODS
 *    {Integer} AddNode �� ��������� ����� ����
 * INPUTS
 *    -
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TTree()
{
    this.Nodes = new Array;
    this.Index = 0;

    /****m* SmallGoEditor/TTree.AddNode
     * NAME
     *    AddNode � ��������� ����� ����
     * FUNCTION
     *    ���� ����� ��������� ����� ���� ������
     * INPUTS
     *    -
     * RESULT
     *    {Integer} �� ������ ������������ ����
     * SOURCE
     */
    this.AddNode = function(Data, Parent)
    {
      // ��������� ����� ����
      this.Nodes[this.Index] = new TNode(Parent, Data);
      // ���� ��� �� ��������, �� ��������� ����� ��������
      if (Parent != -1)
      {
        this.Nodes[Parent].Children.push(this.Index);
      };
      // ����������� ���-�� �����
      this.Index++;
      // ���������� ������ ������������ ����
      return this.Index - 1;
    };
    /*********/

};
