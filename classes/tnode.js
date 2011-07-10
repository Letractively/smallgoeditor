//////////////////////////////////////////////////////////////////////////////
//  ласс ”«≈Ћ                                                               //
//////////////////////////////////////////////////////////////////////////////

/****c* SmallGoEditor/TNode
 * NAME
 *     ласс TNode Ч узел дерева SGF
 * VERSION
 *    0.3 (17.06.2011)
 * FUNCTION
 *     ласс, описывающий один узел дерева SGF
 * PROPERTIES
 *    {Integer} Parent   ЧЧ индекс родител€
 *    {Array}   B        ЧЧ Black
 *    {Array}   BL       ЧЧ Black time left
 *    {Array}   BM       ЧЧ Bad move
 *    {Array}   DO       ЧЧ Doubtful
 *    {Array}   IT       ЧЧ Interesting
 *    {Array}   KO       ЧЧ Ko
 *    {Array}   MN       ЧЧ set MoveNumber
 *    {Array}   OB       ЧЧ OtStones Black
 *    {Array}   OW       ЧЧ OtStones White
 *    {Array}   TE       ЧЧ Tesuji
 *    {Array}   W        ЧЧ White
 *    {Array}   WL       ЧЧ White time left
 *    {Array}   AB       ЧЧ Add Black
 *    {Array}   AE       ЧЧ Add Empty
 *    {Array}   AW       ЧЧ Add White
 *    {Array}   PL       ЧЧ Player to play
 *    {Array}   AR       ЧЧ Arrow
 *    {Array}   C        ЧЧ Comment
 *    {Array}   CR       ЧЧ Circle
 *    {Array}   DD       ЧЧ Dim points
 *    {Array}   DM       ЧЧ Even position
 *    {Array}   FG       ЧЧ Figure
 *    {Array}   GB       ЧЧ Good for Black
 *    {Array}   GW       ЧЧ Good for White
 *    {Array}   HO       ЧЧ Hotspot
 *    {Array}   LB       ЧЧ Label
 *    {Array}   LN       ЧЧ Line
 *    {Array}   MA       ЧЧ Mark
 *    {Array}   N        ЧЧ Nodename
 *    {Array}   PM       ЧЧ Print move mode
 *    {Array}   SL       ЧЧ Selected
 *    {Array}   SQ       ЧЧ Square
 *    {Array}   TR       ЧЧ Triangle
 *    {Array}   UC       ЧЧ Unclear pos
 *    {Array}   V        ЧЧ Value
 *    {Array}   VW       ЧЧ View
 *    {Array}   AP       ЧЧ Application
 *    {Array}   CA       ЧЧ Charset
 *    {Array}   FF       ЧЧ Fileformat
 *    {Array}   GM       ЧЧ Game
 *    {Array}   ST       ЧЧ Style
 *    {Array}   SZ       ЧЧ Size
 *    {Array}   AN       ЧЧ Annotation
 *    {Array}   BR       ЧЧ Black rank
 *    {Array}   BT       ЧЧ Black team
 *    {Array}   CP       ЧЧ Copyright
 *    {Array}   DT       ЧЧ Date
 *    {Array}   EV       ЧЧ Event
 *    {Array}   GC       ЧЧ Game comment
 *    {Array}   GN       ЧЧ Game name
 *    {Array}   ON       ЧЧ Opening
 *    {Array}   OT       ЧЧ Overtime
 *    {Array}   PB       ЧЧ Player Black
 *    {Array}   PC       ЧЧ Place
 *    {Array}   PW       ЧЧ Player White
 *    {Array}   RE       ЧЧ Result
 *    {Array}   RO       ЧЧ Round
 *    {Array}   RU       ЧЧ Rules
 *    {Array}   SO       ЧЧ Source
 *    {Array}   TM       ЧЧ Timelimit
 *    {Array}   US       ЧЧ User
 *    {Array}   WR       ЧЧ White rank
 *    {Array}   WT       ЧЧ White team
 *    {Array}   TB       ЧЧ Territory Black
 *    {Array}   TW       ЧЧ Territory White
 *    {Array}   HA       ЧЧ Handicap
 *    {Array}   KM       ЧЧ Komi
 * METHODS
 *    {String} SGF ЧЧ возвращает SGF данного узла
 * INPUTS
 *    {Integer} Parent ЧЧ индекс родител€
 *    {Array}   Data   ЧЧ массив данных узла
 * AUTHOR
 *    Dolu mailto:dolu.bl@gmail.com
 *********/
function TNode(Parent, Data)
{
    this.Parent = Parent; // –одитель
    this.Children = []; // ћассив детей

    this.B  = null; // Black
    this.BL = null; // Black time left
    this.BM = null; // Bad move
    this.DO = null; // Doubtful
    this.IT = null; // Interesting
    this.KO = null; // Ko
    this.MN = null; // set MoveNumber
    this.OB = null; // OtStones Black
    this.OW = null; // OtStones White
    this.TE = null; // Tesuji
    this.W  = null; // White
    this.WL = null; // White time left

    this.AB = null; // Add Black
    this.AE = null; // Add Empty
    this.AW = null; // Add White
    this.PL = null; // Player to play

    this.AR = null; // Arrow
    this.C  = null; // Comment
    this.CR = null; // Circle
    this.DD = null; // Dim points
    this.DM = null; // Even position
    this.FG = null; // Figure
    this.GB = null; // Good for Black
    this.GW = null; // Good for White
    this.HO = null; // Hotspot
    this.LB = null; // Label
    this.LN = null; // Line
    this.MA = null; // Mark
    this.N  = null; // Nodename
    this.PM = null; // Print move mode
    this.SL = null; // Selected
    this.SQ = null; // Square
    this.TR = null; // Triangle
    this.UC = null; // Unclear pos
    this.V  = null; // Value
    this.VW = null; // View

    this.AP = null; // Application
    this.CA = null; // Charset
    this.FF = null; // Fileformat
    this.GM = null; // Game
    this.ST = null; // Style
    this.SZ = null; // Size

    this.AN = null; // Annotation
    this.BR = null; // Black rank
    this.BT = null; // Black team
    this.CP = null; // Copyright
    this.DT = null; // Date
    this.EV = null; // Event
    this.GC = null; // Game comment
    this.GN = null; // Game name
    this.ON = null; // Opening
    this.OT = null; // Overtime
    this.PB = null; // Player Black
    this.PC = null; // Place
    this.PW = null; // Player White
    this.RE = null; // Result
    this.RO = null; // Round
    this.RU = null; // Rules
    this.SO = null; // Source
    this.TM = null; // Timelimit
    this.US = null; // User
    this.WR = null; // White rank
    this.WT = null; // White team

    this.TB = null; // Territory Black
    this.TW = null; // Territory White

    this.HA = null; // Handicap
    this.KM = null; // Komi

    // +ЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧ+
    // | ќЌ—“–” “ќ– (заполнение узла данными)|
    // +ЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧ+
    for (var i = 0; i < Data.length; i++)
    {
      if (i % 2 === 0)
      {
        switch(Data[i])
        {
          case "B":  this.B  = Data[i + 1]; break;
          case "BL": this.BL = Data[i + 1]; break;
          case "BM": this.BM = Data[i + 1]; break;
          case "DO": this.DO = Data[i + 1]; break;
          case "IT": this.IT = Data[i + 1]; break;
          case "KO": this.KO = Data[i + 1]; break;
          case "MN": this.MN = Data[i + 1]; break;
          case "OB": this.OB = Data[i + 1]; break;
          case "OW": this.OW = Data[i + 1]; break;
          case "TE": this.TE = Data[i + 1]; break;
          case "W":  this.W  = Data[i + 1]; break;
          case "WL": this.WL = Data[i + 1]; break;
          case "AB": this.AB = Data[i + 1]; break;
          case "AE": this.AE = Data[i + 1]; break;
          case "AW": this.AW = Data[i + 1]; break;
          case "PL": this.PL = Data[i + 1]; break;
          case "AR": this.AR = Data[i + 1]; break;
          case "C":  this.C  = Data[i + 1]; break;
          case "CR": this.CR = Data[i + 1]; break;
          case "DD": this.DD = Data[i + 1]; break;
          case "DM": this.DM = Data[i + 1]; break;
          case "FG": this.FG = Data[i + 1]; break;
          case "GB": this.GB = Data[i + 1]; break;
          case "GW": this.GW = Data[i + 1]; break;
          case "HO": this.HO = Data[i + 1]; break;
          case "LB": this.LB = Data[i + 1]; break;
          case "LN": this.LN = Data[i + 1]; break;
          case "MA": this.MA = Data[i + 1]; break;
          case "N":  this.N  = Data[i + 1]; break;
          case "PM": this.PM = Data[i + 1]; break;
          case "SL": this.SL = Data[i + 1]; break;
          case "SQ": this.SQ = Data[i + 1]; break;
          case "TR": this.TR = Data[i + 1]; break;
          case "UC": this.UC = Data[i + 1]; break;
          case "V":  this.V  = Data[i + 1]; break;
          case "VW": this.VW = Data[i + 1]; break;
          case "AP": this.AP = Data[i + 1]; break;
          case "CA": this.CA = Data[i + 1]; break;
          case "FF": this.FF = Data[i + 1]; break;
          case "GM": this.GM = Data[i + 1]; break;
          case "ST": this.ST = Data[i + 1]; break;
          case "SZ": this.SZ = Data[i + 1]; break;
          case "AN": this.AN = Data[i + 1]; break;
          case "BR": this.BR = Data[i + 1]; break;
          case "BT": this.BT = Data[i + 1]; break;
          case "CP": this.CP = Data[i + 1]; break;
          case "DT": this.DT = Data[i + 1]; break;
          case "EV": this.EV = Data[i + 1]; break;
          case "GC": this.GC = Data[i + 1]; break;
          case "GN": this.GN = Data[i + 1]; break;
          case "ON": this.ON = Data[i + 1]; break;
          case "OT": this.OT = Data[i + 1]; break;
          case "PB": this.PB = Data[i + 1]; break;
          case "PC": this.PC = Data[i + 1]; break;
          case "PW": this.PW = Data[i + 1]; break;
          case "RE": this.RE = Data[i + 1]; break;
          case "RO": this.RO = Data[i + 1]; break;
          case "RU": this.RU = Data[i + 1]; break;
          case "SO": this.SO = Data[i + 1]; break;
          case "TM": this.TM = Data[i + 1]; break;
          case "US": this.US = Data[i + 1]; break;
          case "WR": this.WR = Data[i + 1]; break;
          case "WT": this.WT = Data[i + 1]; break;
          case "TB": this.TB = Data[i + 1]; break;
          case "TW": this.TW = Data[i + 1]; break;
          case "HA": this.HA = Data[i + 1]; break;
          case "KM": this.KM = Data[i + 1]; break;
          default:
            // ќЎ»Ѕ ј (найдено несуществующее свойство узла)
            break;
        };
      };
    };

    /****m* SmallGoEditor/TNode.SGF
     * NAME
     *    SGF Ч возвращает SGF данного узла
     * FUNCTION
     *    Ётот метод формирует и возвращает SGF данные, дл€ данного узла.
     * INPUTS
     *    -
     * RESULT
     *    {String} ЧЧ SGF-данные соответствующие данному узлу
     * SOURCE
     */
    this.SGF = function()
    {
      var result = "";
      if (this.B  != null) { result += "B";  for (var i = 0; i < this.B.length;  i++) { result += "[" + this.B[i]  + "]"; }; };
      if (this.BL != null) { result += "BL"; for (var i = 0; i < this.BL.length; i++) { result += "[" + this.BL[i] + "]"; }; };
      if (this.BL != null) { result += "BL"; for (var i = 0; i < this.BL.length; i++) { result += "[" + this.BL[i] + "]"; }; };
      if (this.BM != null) { result += "BM"; for (var i = 0; i < this.BM.length; i++) { result += "[" + this.BM[i] + "]"; }; };
      if (this.DO != null) { result += "DO"; for (var i = 0; i < this.DO.length; i++) { result += "[" + this.DO[i] + "]"; }; };
      if (this.IT != null) { result += "IT"; for (var i = 0; i < this.IT.length; i++) { result += "[" + this.IT[i] + "]"; }; };
      if (this.KO != null) { result += "KO"; for (var i = 0; i < this.KO.length; i++) { result += "[" + this.KO[i] + "]"; }; };
      if (this.MN != null) { result += "MN"; for (var i = 0; i < this.MN.length; i++) { result += "[" + this.MN[i] + "]"; }; };
      if (this.OB != null) { result += "OB"; for (var i = 0; i < this.OB.length; i++) { result += "[" + this.OB[i] + "]"; }; };
      if (this.OW != null) { result += "OW"; for (var i = 0; i < this.OW.length; i++) { result += "[" + this.OW[i] + "]"; }; };
      if (this.TE != null) { result += "TE"; for (var i = 0; i < this.TE.length; i++) { result += "[" + this.TE[i] + "]"; }; };
      if (this.W  != null) { result += "W" ; for (var i = 0; i < this.W.length;  i++) { result += "[" + this.W[i]  + "]"; }; };
      if (this.WL != null) { result += "WL"; for (var i = 0; i < this.WL.length; i++) { result += "[" + this.WL[i] + "]"; }; };
      if (this.AB != null) { result += "AB"; for (var i = 0; i < this.AB.length; i++) { result += "[" + this.AB[i] + "]"; }; };
      if (this.AE != null) { result += "AE"; for (var i = 0; i < this.AE.length; i++) { result += "[" + this.AE[i] + "]"; }; };
      if (this.AW != null) { result += "AW"; for (var i = 0; i < this.AW.length; i++) { result += "[" + this.AW[i] + "]"; }; };
      if (this.PL != null) { result += "PL"; for (var i = 0; i < this.PL.length; i++) { result += "[" + this.PL[i] + "]"; }; };
      if (this.AR != null) { result += "AR"; for (var i = 0; i < this.AR.length; i++) { result += "[" + this.AR[i] + "]"; }; };
      if (this.C  != null) { result += "C" ; for (var i = 0; i < this.C.length;  i++) { result += "[" + this.C[i]  + "]"; }; };
      if (this.CR != null) { result += "CR"; for (var i = 0; i < this.CR.length; i++) { result += "[" + this.CR[i] + "]"; }; };
      if (this.DD != null) { result += "DD"; for (var i = 0; i < this.DD.length; i++) { result += "[" + this.DD[i] + "]"; }; };
      if (this.DM != null) { result += "DM"; for (var i = 0; i < this.DM.length; i++) { result += "[" + this.DM[i] + "]"; }; };
      if (this.FG != null) { result += "FG"; for (var i = 0; i < this.FG.length; i++) { result += "[" + this.FG[i] + "]"; }; };
      if (this.GB != null) { result += "GB"; for (var i = 0; i < this.GB.length; i++) { result += "[" + this.GB[i] + "]"; }; };
      if (this.GW != null) { result += "GW"; for (var i = 0; i < this.GW.length; i++) { result += "[" + this.GW[i] + "]"; }; };
      if (this.HO != null) { result += "HO"; for (var i = 0; i < this.HO.length; i++) { result += "[" + this.HO[i] + "]"; }; };
      if (this.LB != null) { result += "LB"; for (var i = 0; i < this.LB.length; i++) { result += "[" + this.LB[i] + "]"; }; };
      if (this.LN != null) { result += "LN"; for (var i = 0; i < this.LN.length; i++) { result += "[" + this.LN[i] + "]"; }; };
      if (this.MA != null) { result += "MA"; for (var i = 0; i < this.MA.length; i++) { result += "[" + this.MA[i] + "]"; }; };
      if (this.N  != null) { result += "N" ; for (var i = 0; i < this.N.length;  i++) { result += "[" + this.N[i]  + "]"; }; };
      if (this.PM != null) { result += "PM"; for (var i = 0; i < this.PM.length; i++) { result += "[" + this.PM[i] + "]"; }; };
      if (this.SL != null) { result += "SL"; for (var i = 0; i < this.SL.length; i++) { result += "[" + this.SL[i] + "]"; }; };
      if (this.SQ != null) { result += "SQ"; for (var i = 0; i < this.SQ.length; i++) { result += "[" + this.SQ[i] + "]"; }; };
      if (this.TR != null) { result += "TR"; for (var i = 0; i < this.TR.length; i++) { result += "[" + this.TR[i] + "]"; }; };
      if (this.UC != null) { result += "UC"; for (var i = 0; i < this.UC.length; i++) { result += "[" + this.UC[i] + "]"; }; };
      if (this.V  != null) { result += "V" ; for (var i = 0; i < this.V.length;  i++) { result += "[" + this.V[i]  + "]"; }; };
      if (this.VW != null) { result += "VW"; for (var i = 0; i < this.VW.length; i++) { result += "[" + this.VW[i] + "]"; }; };
      if (this.AP != null) { result += "AP"; for (var i = 0; i < this.AP.length; i++) { result += "[" + this.AP[i] + "]"; }; };
      if (this.CA != null) { result += "CA"; for (var i = 0; i < this.CA.length; i++) { result += "[" + this.CA[i] + "]"; }; };
      if (this.FF != null) { result += "FF"; for (var i = 0; i < this.FF.length; i++) { result += "[" + this.FF[i] + "]"; }; };
      if (this.GM != null) { result += "GM"; for (var i = 0; i < this.GM.length; i++) { result += "[" + this.GM[i] + "]"; }; };
      if (this.ST != null) { result += "ST"; for (var i = 0; i < this.ST.length; i++) { result += "[" + this.ST[i] + "]"; }; };
      if (this.SZ != null) { result += "SZ"; for (var i = 0; i < this.SZ.length; i++) { result += "[" + this.SZ[i] + "]"; }; };
      if (this.AN != null) { result += "AN"; for (var i = 0; i < this.AN.length; i++) { result += "[" + this.AN[i] + "]"; }; };
      if (this.BR != null) { result += "BR"; for (var i = 0; i < this.BR.length; i++) { result += "[" + this.BR[i] + "]"; }; };
      if (this.BT != null) { result += "BT"; for (var i = 0; i < this.BT.length; i++) { result += "[" + this.BT[i] + "]"; }; };
      if (this.CP != null) { result += "CP"; for (var i = 0; i < this.CP.length; i++) { result += "[" + this.CP[i] + "]"; }; };
      if (this.DT != null) { result += "DT"; for (var i = 0; i < this.DT.length; i++) { result += "[" + this.DT[i] + "]"; }; };
      if (this.EV != null) { result += "EV"; for (var i = 0; i < this.EV.length; i++) { result += "[" + this.EV[i] + "]"; }; };
      if (this.GC != null) { result += "GC"; for (var i = 0; i < this.GC.length; i++) { result += "[" + this.GC[i] + "]"; }; };
      if (this.GN != null) { result += "GN"; for (var i = 0; i < this.GN.length; i++) { result += "[" + this.GN[i] + "]"; }; };
      if (this.ON != null) { result += "ON"; for (var i = 0; i < this.ON.length; i++) { result += "[" + this.ON[i] + "]"; }; };
      if (this.OT != null) { result += "OT"; for (var i = 0; i < this.OT.length; i++) { result += "[" + this.OT[i] + "]"; }; };
      if (this.PB != null) { result += "PB"; for (var i = 0; i < this.PB.length; i++) { result += "[" + this.PB[i] + "]"; }; };
      if (this.PC != null) { result += "PC"; for (var i = 0; i < this.PC.length; i++) { result += "[" + this.PC[i] + "]"; }; };
      if (this.PW != null) { result += "PW"; for (var i = 0; i < this.PW.length; i++) { result += "[" + this.PW[i] + "]"; }; };
      if (this.RE != null) { result += "RE"; for (var i = 0; i < this.RE.length; i++) { result += "[" + this.RE[i] + "]"; }; };
      if (this.RO != null) { result += "RO"; for (var i = 0; i < this.RO.length; i++) { result += "[" + this.RO[i] + "]"; }; };
      if (this.RU != null) { result += "RU"; for (var i = 0; i < this.RU.length; i++) { result += "[" + this.RU[i] + "]"; }; };
      if (this.SO != null) { result += "SO"; for (var i = 0; i < this.SO.length; i++) { result += "[" + this.SO[i] + "]"; }; };
      if (this.TM != null) { result += "TM"; for (var i = 0; i < this.TM.length; i++) { result += "[" + this.TM[i] + "]"; }; };
      if (this.US != null) { result += "US"; for (var i = 0; i < this.US.length; i++) { result += "[" + this.US[i] + "]"; }; };
      if (this.WR != null) { result += "WR"; for (var i = 0; i < this.WR.length; i++) { result += "[" + this.WR[i] + "]"; }; };
      if (this.WT != null) { result += "WT"; for (var i = 0; i < this.WT.length; i++) { result += "[" + this.WT[i] + "]"; }; };
      if (this.TB != null) { result += "TB"; for (var i = 0; i < this.TB.length; i++) { result += "[" + this.TB[i] + "]"; }; };
      if (this.TW != null) { result += "TW"; for (var i = 0; i < this.TW.length; i++) { result += "[" + this.TW[i] + "]"; }; };
      if (this.HA != null) { result += "HA"; for (var i = 0; i < this.HA.length; i++) { result += "[" + this.HA[i] + "]"; }; };
      if (this.KM != null) { result += "KM"; for (var i = 0; i < this.KM.length; i++) { result += "[" + this.KM[i] + "]"; }; };
      return result;
    };
    /*********/

};
