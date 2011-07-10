//////////////////////////////////////////////////////////////////////////////
//  ласс SGF ѕј–—≈–                                                         //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TSGFParser
 * NAME
 *     ласс TSGFParser Ч SGF парсер
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *     ласс, описывающий SGF парсер
 * AGGREGATION
 *    {TTree} Tree ЧЧ SGF дерево
 * PROPERTIES
 *    {String}  SGF      ЧЧ SGF текст
 *    {Integer} IndexSGF ЧЧ число указывает на символ в тексте SGF, который
 *                          будет читатьс€
 * METHODS
 *    {Void}   BuildTree ЧЧ пстроение дерева (основной метод)
 *    {Void}   Properties ЧЧ чтение свойств SGF узла
 *    {String} ReadData ЧЧ чтение данных дл€ свойств
 *    {String} BuildSGF ЧЧ строит SGF на основе имеющегос€ дерева
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
     *    BuildTree Ч пстроение дерева (основной метод)
     * FUNCTION
     *    Ётот метод строит дерево и заполн€ет его данными, вызыва€ при этом
     *    другие методы данного класса.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.BuildTree = function()
    {
      // —тек указателей на родительский объект
      var IndexStack = [];
      var CurrentIndexTree = -1;
      var ch;
      var data = "";
      var end = false;
      do
      {
        if (this.IndexSGF < this.SGF.length)
        {
          // читаем символ из SGF
          ch = this.SGF.charAt(this.IndexSGF++);
          switch (ch)
          {
            case "(": // нова€ ветвть
              IndexStack.push(CurrentIndexTree);
              break;
            case ";": // новый ”зел
              data = this.Properties();
              CurrentIndexTree = this.Tree.AddNode(data, CurrentIndexTree);
              break;
            case ")": // ветвть закончилась
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
     *    Properties Ч чтение свойств SGF узла
     * FUNCTION
     *    Ётот метод читает имена свойств и запускает метод чтени€ данных дл€
     *    них.
     * INPUTS
     *    -
     * RESULT
     *    {Array} ЧЧ массив в котором чЄтные элементы это имена свойств, а
     *               нечЄтные Ч массивы данных дл€ этих свойств
     * SOURCE
     */
    // чтение свойств ”зла
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
        // читаем символ SGF
        ch = this.SGF.charAt(this.IndexSGF++);
        switch (ch)
        {
          case "[": // начало значени€ свойства
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
          case "]": // конец значени€ свойства
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
          default: // «апись данных (названи€ свойств)
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
     *    ReadData Ч чтение данных дл€ свойств
     * FUNCTION
     *    Ётот метод читает данные дл€ свойств и возвращает их.
     * INPUTS
     *    -
     * RESULT
     *    {String} ЧЧ единица данных дл€ свойства
     * SOURCE
     */
    this.ReadData = function()
    {
      var result = "";
      do
      {
        // читаем символ SGF
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
     *    BuildSGF Ч строит SGF на основе имеющегос€ дерева
     * FUNCTION
     *    Ётот метод строит и возвращает SGF на основе имеющегос€ дерева.
     * INPUTS
     *    -
     * RESULT
     *    {String} ЧЧ новые SGF данные
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
