//////////////////////////////////////////////////////////////////////////////
// ����� �����                                                              //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TBoard
 * NAME
 *    ����� TBoard � ��������� �����
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *    �����, ����������� ����� ��� ������ ��������
 * PROPERTIES
 *    {Integer} Size �� ������ �����
 * AGGREGATION
 *    {TGame}   Game    �� ����
 *    {TPlace}  Places  �� ����� �� ����� ��� ���� ������
 *    {TRuller} HRuller �� �������������� �������
 *    {TRuller} VRuller �� ������������ �������
 * METHODS
 *    {Char}   SGF_NtL �� ��������� ����� � ���������� ���������� SGF
 *    {Number} SGF_LtN �� ��������� ���������� ���������� SGF � �����
 *    {Void}   Show �� ������ � ������� �����
 *    {Void}   Clear �� �������� ����� �� ������
 *    {Void}   ClearLabels �� �������� ����� �� ����� (Label)
 *    {Void}   Info �� ����� ����� ����������
 *    {Void}   CheckDead �� �������� �� ������ �����
 *    {Number} DeadStones �� ����������� �������� ������ ������
 *    {Void}   KillStone �� ������� ������ � �����
 *    {Void}   KillStones �� ������� ������ ������ � �����
 *    {Void}   AddStone �� ��������� ������ �� �����
 *    {Void}   LastStone �� ����� ��������� ������������ ������
 *    {Void}   AddLabel �� ��������� ����� (Label) �� �����
 * INPUTS
 *    {Integer} Size �� ������ ����� (������������ ��������: 19)
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TBoard(Size)
{
    this.Size = Size;

    this.Game = new TGame();

    this.Places  = new Array;
    this.HRuller = new Array;
    this.VRuller = new Array;


    /****m* SmallGoEditor/TBoard.SGF_NtL
     * NAME
     *    SGF_NtL � ��������� ����� � ���������� ���������� SGF
     * FUNCTION
     *    ���� ����� ���������� ���������� ���������� ���������������
     *    ����������� ������.
     * INPUTS
     *    {Number} Num �� ���������� ����� ����������
     * RESULT
     *    {Char} �� ���������� ���������� SGF
     * SOURCE
     */
    this.SGF_NtL = function(Num)
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
        case 9: result  = "i"; break;
        case 10: result = "j"; break;
        case 11: result = "k"; break;
        case 12: result = "l"; break;
        case 13: result = "m"; break;
        case 14: result = "n"; break;
        case 15: result = "o"; break;
        case 16: result = "p"; break;
        case 17: result = "q"; break;
        case 18: result = "r"; break;
        case 19: result = "s"; break;
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TBoard.SGF_LtN
     * NAME
     *    SGF_LtN � ��������� ���������� ���������� SGF � �����
     * FUNCTION
     *    ���� ����� ���������� ���������� ����� ���������� ���������� SGF.
     * INPUTS
     *    {Char} Letter �� ���������� ���������� SGF
     * RESULT
     *    {Number} �� ���������� ����� ����������
     * SOURCE
     */
    this.SGF_LtN = function(Letter)
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
        case "i": result = 9;  break;
        case "j": result = 10;  break;
        case "k": result = 11; break;
        case "l": result = 12; break;
        case "m": result = 13; break;
        case "n": result = 14; break;
        case "o": result = 15; break;
        case "p": result = 16; break;
        case "q": result = 17; break;
        case "r": result = 18; break;
        case "s": result = 19; break;
      };
      return result;
    };
    /*********/


    // +������������������������������+
    // |����������� (���������� �����)|
    // +������������������������������+
    for (var x = 1; x <= Size; x++)
    {
      this.Places[x] = new Array; // ������ ��������� ������
      this.HRuller[x] = new TRuller(x, "h");
      this.VRuller[x] = new TRuller(x, "v");
      for (var y = 1; y <= Size; y++)
      {
        if (x === 1)
        {
          if (y === 1)
          {
            // ����� ������� ����
            this.Places[x][y] = new TPlace(
              "lt",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else if (y === Size)
          {
            // ����� ������ ����
            this.Places[x][y] = new TPlace(
              "lb",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else
          {
            // ����� �������
            this.Places[x][y] = new TPlace(
              "l",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          };
        }
        else if (x === Size)
        {
          if (y === 1)
          {
            // ������ ������� ����
            this.Places[x][y] = new TPlace(
              "rt",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else if (y === Size)
          {
            // ������ ������ ����
            this.Places[x][y] = new TPlace(
              "rb",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else
          {
            // ������ �������
            this.Places[x][y] = new TPlace(
              "r",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          };
        }
        else
        {
          if (y === 1)
          {
            // ���� �����
            this.Places[x][y] = new TPlace(
              "t",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else if (y === Size)
          {
            // ��� �����
            this.Places[x][y] = new TPlace(
              "b",
              this.SGF_NtL(x) + this.SGF_NtL(y)
            );
          }
          else
          {
            // ����������� ����������� ���� �� ����� 19*19
            if ((this.Size === 19) && (this.Size === 19))
            {
              // ������ ����
              if ( ( (x === 4)  && (y === 4)  ) ||
                   ( (x === 4)  && (y === 10) ) ||
                   ( (x === 4)  && (y === 16) ) ||
                   ( (x === 10) && (y === 4)  ) ||
                   ( (x === 10) && (y === 10) ) ||
                   ( (x === 10) && (y === 16) ) ||
                   ( (x === 16) && (y === 4)  ) ||
                   ( (x === 16) && (y === 10) ) ||
                   ( (x === 16) && (y === 16) ) )
              {
                this.Places[x][y] = new TPlace(
                  "d",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              }
              // ������ �����������
              else
              {
                this.Places[x][y] = new TPlace(
                  "c",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              };
            }
            // ����������� ����������� ���� �� ����� 13*13
            else if ((this.Size === 13) && (this.Size === 13))
            {
              // ������ ����
              if ( ( (x === 4)  && (y === 4)  ) ||
                   ( (x === 4)  && (y === 7)  ) ||
                   ( (x === 4)  && (y === 10) ) ||
                   ( (x === 7)  && (y === 4)  ) ||
                   ( (x === 7)  && (y === 7)  ) ||
                   ( (x === 7)  && (y === 10) ) ||
                   ( (x === 10) && (y === 4)  ) ||
                   ( (x === 10) && (y === 7)  ) ||
                   ( (x === 10) && (y === 10) ) )
              {
                this.Places[x][y] = new TPlace(
                  "d",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              }
              // ������ �����������
              else
              {
                this.Places[x][y] = new TPlace(
                  "c",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              };
            }
            // ����������� ����������� ���� �� ����� 9*9
            else if ((this.Size === 9) && (this.Size === 9))
            {
              // ������ ����
              if ( ( (x === 3)  && (y === 3) ) ||
                   ( (x === 3)  && (y === 7) ) ||
                   ( (x === 5)  && (y === 5) ) ||
                   ( (x === 7)  && (y === 3) ) ||
                   ( (x === 7)  && (y === 7) ) )
              {
                this.Places[x][y] = new TPlace(
                  "d",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              }
              // ������ �����������
              else
              {
                this.Places[x][y] = new TPlace(
                  "c",
                  this.SGF_NtL(x) + this.SGF_NtL(y)
                );
              };
            }
            // ������������� ����� ��� ����
            else
            {
              this.Places[x][y] = new TPlace(
                "c",
                this.SGF_NtL(x) + this.SGF_NtL(y)
              );
            };
          };
        };
      };
    };


    /****m* SmallGoEditor/TBoard.Show
     * NAME
     *    Show � ������ � ������� �����
     * FUNCTION
     *    ���� ����� ������ ���� � ������� HTML � ������� � � ���������������
     *    ����� �� ���-��������.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.Show = function()
    {
      var result =
        "<table id='MainTable' cellpadding=0 cellspacing=0 border=0>";
      // ��� ��������� �������������� ������������ ������
      var yRuller = this.Size + 1;
      for (var y = 0; y <= this.Size + 1; y++)
      {
        result += "<tr>";
        for (var x = 0; x <= this.Size + 1; x++)
        {
          // ���������� �������������� ������
          if ( ( (y === 0) || (y === this.Size + 1) ) &&
               (x != 0) &&
               (x != this.Size + 1) )
          {
            result += "<td>" + this.HRuller[x].Show() + "</td>";
          }
          // ���������� ������������ ������
          else if ( ( (x === 0) || (x === this.Size + 1) ) &&
                    (y != 0)  &&
                    (y != this.Size + 1) )
          {
            result += "<td>" + this.VRuller[yRuller].Show() + "</td>";
          }
          // ���������� ����������
          else if ( (x != 0)             && (y != 0)            &&
                    (x != this.Size + 1) && (y != this.Size + 1) )
          {
            result += this.Places[x][y].Show();
          }
          // ���������� ������� ������������
          else
          {
            result += "<td></td>";
          };
        };
        result += "</tr>";
        yRuller--;
      };
      result += "</table>";
      document.all.item("Board").innerHTML = result;
      this.Info();
    };
    /*********/


    /****m* SmallGoEditor/TBoard.Clear
     * NAME
     *    Clear � �������� ����� �� ������
     * FUNCTION
     *    ���� ����� �������� �� ����� ��� ����� ��� "n", �.�. �������������.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.Clear = function()
    {
      this.Game.WCaptured = 0;
      this.Game.BCaptured = 0;
      for (var y = 1; y <= this.Size; y++)
      {
        for (var x = 1; x <= this.Size; x++)
        {
          this.Places[x][y].Stone = "n";
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.ClearLabels
     * NAME
     *    ClearLabels � �������� ����� �� ����� (Label)
     * FUNCTION
     *    ���� ����� �������� ��� ����� �� ���� ������� �����.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.ClearLabels = function()
    {
      for (var y = 1; y <= this.Size; y++)
      {
        for (var x = 1; x <= this.Size; x++)
        {
          this.Places[x][y].Label = "";
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.Info
     * NAME
     *    Info � ����� ����� ����������
     * FUNCTION
     *    ���� ����� ��������� � ������� �� ���-�������� ����� ���������� ��
     *    ����.
     * INPUTS
     *    -
     * RESULT
     *    -
     * SOURCE
     */
    this.Info = function()
    {
      var result = "<table id='InfoTable' border=0>";
      result += this.Game.Show();
      // ������� ������ �����
      result += "<tr>";
      result += "<td>������ �����:</td>";
      result += "<td>" + this.Size + " x " + this.Size + "</td>"
      result += "</tr>";
      result += "</table>";
      // ��������� �� �����
      document.all.item('Info').innerHTML = result;
    };
    /*********/


    /****m* SmallGoEditor/TBoard.CheckDead
     * NAME
     *    CheckDead � �������� �� ������ �����
     * FUNCTION
     *    ���� ����� ��������� �������� � ������ ����� ���� �� ������ ������,
     *    ���� ���, �� ��������� ����� ��������� ��� �����.
     * INPUTS
     *    {Number} x     �� ���������� �����-����� ������
     *    {Number} y     �� ���������� �����-����� ������
     *    {Char}   color �� ���� ������
     * RESULT
     *    -
     * SOURCE
     */
    this.CheckDead = function(x, y, color)
    {
      // �������� � ������ �����
      if ( (x > 0)          && (y > 0)          &&
           (x <= this.Size) && (y <= this.Size) &&
           (this.Places[x][y].Stone != color)   )
      {
        if (color === "w") // ���� ������ �����
        {
          // ��������� ������ ������
          result = this.DeadStones(x, y, "b");
        }
        else // ���� ������ �����
        {
          // ��������� ������ ������
          result = this.DeadStones(x, y, "w");
        };
        if (result === 1) // ���� ������ ������ - ������� � � �����
        {
          this.KillStones(x, y, color);
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.DeadStones
     * NAME
     *    DeadStones � ����������� �������� ������ ������
     * FUNCTION
     *    ���� ����� ��������� �������� � ������ ����� ���� �� ������ ������,
     *    ���������� �������� ���� ��� ������� ����� � ������.
     * INPUTS
     *    {Number} x     �� ���������� �����-����� ������
     *    {Number} y     �� ���������� �����-����� ������
     *    {Char}   color �� ���� ������
     * RESULT
     *    {Number} �� 0 - ������ ����, ���� ������ ���� �������
     *                1 - ������ ������, ������� ���
     * SOURCE
     */
    this.DeadStones = function(x, y, color)
    {
      var result = 1;
      // �������� � ������ �����
      if ( (x > 0)          && (y > 0)          &&
           (x <= this.Size) && (y <= this.Size) )
      {
        // ���� ������ ���� �� ����� � �� �������
        if ( (this.Places[x][y].Stone === color) &&
             (this.Places[x][y].Check !=  true)  )
        {
          this.Places[x][y].Check = true; // ����� ������
          result = result && this.DeadStones(x + 1, y, color); // ����������
          result = result && this.DeadStones(x - 1, y, color); // ����������
          result = result && this.DeadStones(x, y + 1, color); // ����������
          result = result && this.DeadStones(x, y - 1, color); // ����������
          this.Places[x][y].Check = false; // ������� �����
        }
        else if (this.Places[x][y].Stone === "n") // ���� ���� �������
        {
          return 0;
        };
      };
      return result;
    };
    /*********/


    /****m* SmallGoEditor/TBoard.KillStone
     * NAME
     *    KillStone � ������� ������ � �����
     * FUNCTION
     *    ���� ����� ������� ��������� ������ � ����� � ����������� ����������
     *    ������ ������ ����� ����� �� 1.
     * INPUTS
     *    {Number} x �� ���������� �����
     *    {Number} y �� ���������� �����
     * RESULT
     *    -
     * SOURCE
     */
    this.KillStone = function(x, y)
    {
      if (this.Places[x][y].Stone === "b") // ���� ������ ������
      {
        this.Places[x][y].Stone = "n"; // �������� ���
        this.Game.BCaptured++; // ����������� ���-�� ������� ������
      }
      else if (this.Places[x][y].Stone === "w") // ���� ������ �����
      {
        this.Places[x][y].Stone = "n"; // �������� ���
        this.Game.WCaptured++; // ����������� ���-�� ������� �����
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.KillStones
     * NAME
     *    KillStones � ������� ������ ������ � �����
     * FUNCTION
     *    ���� �����, ���������� ������� ����, ��������� ����� ���������
     *    ������ � �����, ����� ������� ������� ��� ������.
     * INPUTS
     *    {Number} x     �� ���������� �����-����� ������
     *    {Number} y     �� ���������� �����-����� ������
     *    {Char}   color �� ���� ������
     * RESULT
     *    -
     * SOURCE
     */
    this.KillStones = function(x, y, color)
    {
      // ���� ������ � ������ �����
      if ( (x > 0) && (y > 0) && (x <= this.Size) && (y <= this.Size) )
      {
        // ���� ���� ����� �� ��������� � ��� �� ������ �����
        if ( (this.Places[x][y].Stone != color) &&
             (this.Places[x][y].Stone != "n") )
        {
          this.KillStone(x, y); // ����� ������
          this.KillStones(x + 1, y, color); // ����������
          this.KillStones(x - 1, y, color); // ����������
          this.KillStones(x, y + 1, color); // ����������
          this.KillStones(x, y - 1, color); // ����������
        };
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.AddStone
     * NAME
     *    AddStone � ��������� ������ �� �����
     * FUNCTION
     *    ���� ����� ������ ������ �� ���� � ��������� ��������, �� ���������
     *    �� ������ �����.
     * INPUTS
     *    {Number} x     �� ���������� �����
     *    {Number} y     �� ���������� �����
     *    {Char}   color �� ���� �����
     * RESULT
     *    -
     * SOURCE
     */
    this.AddStone = function(x, y, color)
    {
      // ������ ������ �� �����
      this.Places[x][y].Stone = color;
      this.LastStone(x, y);
      this.CheckDead(x + 1, y, color); // ��������� ������ �����
      this.CheckDead(x - 1, y, color); // ��������� ������ �����
      this.CheckDead(x, y + 1, color); // ��������� ������ �����
      this.CheckDead(x, y - 1, color); // ��������� ������ �����
      //this.CheckDead(x, y, "w");
    };
    /*********/


    /****m* SmallGoEditor/TBoard.LastStone
     * NAME
     *    LastStone � ����� ��������� ������������ ������
     * FUNCTION
     *    ���� ����� ������� ����� ���������� ����� �� ���� ����� � �����
     *    ��������� ������������ ������. ����� ����� ������������ ���
     *    ��������� ���.
     * INPUTS
     *    {Number} x_ �� ���������� �����
     *    {Number} y_ �� ���������� �����
     * RESULT
     *    -
     * SOURCE
     */
    this.LastStone = function(x_, y_)
    {
      // ������ ��� ����� �� ����� ���������� �����
      for (var y = 1; y <= this.Size; y++)
      {
        for (var x = 1; x <= this.Size; x++)
        {
          this.Places[x][y].StoneLast = false;
        };
      };
      // ���������� �����
      this.Places[x_][y_].StoneLast = true;
      // ���������� ��� ��������� ���
      if (this.Places[x_][y_].Stone === "b")
      {
        this.Game.BlackMove = false;
      }
      else
      {
        this.Game.BlackMove = true;
      };
    };
    /*********/


    /****m* SmallGoEditor/TBoard.AddLabel
     * NAME
     *    AddLabel � ��������� ����� (Label) �� �����
     * FUNCTION
     *    ���� ����� ��������� ����� ���������� ������ �� �����.
     * INPUTS
     *    {Number} x     �� ���������� �����
     *    {Number} y     �� ���������� �����
     *    {Char}   Label �� ������ �����
     * RESULT
     *    -
     * SOURCE
     */
    this.AddLabel = function(x, y, Label)
    {
      this.Places[x][y].Label = Label;
    };
    /*********/

};
