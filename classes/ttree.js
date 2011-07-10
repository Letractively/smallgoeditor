//////////////////////////////////////////////////////////////////////////////
//  ласс ƒ≈–≈¬ќ                                                             //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TTree
 * NAME
 *     ласс TTree Ч дерево SGF
 * VERSION
 *    0.2 (07.06.2011)
 * FUNCTION
 *     ласс, описывающий дерево узлов SGF
 * AGGREGATION
 *    {Array}   Nodes ЧЧ массив узлов (объектов TNode)
 * PROPERTIES
 *    {Integer} Index ЧЧ кол-во узлов
 * METHODS
 *    {Integer} AddNode ЧЧ добавл€ет новый узел
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
     *    AddNode Ч добавл€ет новый узел
     * FUNCTION
     *    Ётот метод добавл€ет новый узел дереву
     * INPUTS
     *    -
     * RESULT
     *    {Integer} ЧЧ индекс добавленного узла
     * SOURCE
     */
    this.AddNode = function(Data, Parent)
    {
      // добавл€ем новый узел
      this.Nodes[this.Index] = new TNode(Parent, Data);
      // если это не корневой, то добавл€ем детей родителю
      if (Parent != -1)
      {
        this.Nodes[Parent].Children.push(this.Index);
      };
      // увеличиваем кол-во узлов
      this.Index++;
      // возвращаем индекс добавленного узла
      return this.Index - 1;
    };
    /*********/

};
