Blockly.Python=Blockly.Generator.get("Python");Blockly.Python.addReservedWords("and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern");
Blockly.Python.ORDER_ATOMIC=0;Blockly.Python.ORDER_COLLECTION=1;Blockly.Python.ORDER_STRING_CONVERSION=1;Blockly.Python.ORDER_MEMBER=2;Blockly.Python.ORDER_FUNCTION_CALL=2;Blockly.Python.ORDER_EXPONENTIATION=3;Blockly.Python.ORDER_UNARY_SIGN=4;Blockly.Python.ORDER_BITWISE_NOT=4;Blockly.Python.ORDER_MULTIPLICATIVE=5;Blockly.Python.ORDER_ADDITIVE=6;Blockly.Python.ORDER_BITWISE_SHIFT=7;Blockly.Python.ORDER_BITWISE_AND=8;Blockly.Python.ORDER_BITWISE_XOR=9;Blockly.Python.ORDER_BITWISE_OR=10;
Blockly.Python.ORDER_RELATIONAL=11;Blockly.Python.ORDER_LOGICAL_NOT=12;Blockly.Python.ORDER_LOGICAL_AND=13;Blockly.Python.ORDER_LOGICAL_OR=14;Blockly.Python.ORDER_CONDITIONAL=15;Blockly.Python.ORDER_LAMBDA=16;Blockly.Python.ORDER_NONE=99;Blockly.Python.INFINITE_LOOP_TRAP=null;Blockly.Python.FUNCTION_NAME_PLACEHOLDER_="{{{}}}";Blockly.Python.FUNCTION_NAME_PLACEHOLDER_REGEXP_=RegExp(Blockly.Python.FUNCTION_NAME_PLACEHOLDER_,"g");
Blockly.Python.init=function(){Blockly.Python.definitions_={};Blockly.Python.functionNames_={};if(Blockly.Variables){Blockly.Python.variableDB_?Blockly.Python.variableDB_.reset():Blockly.Python.variableDB_=new Blockly.Names(Blockly.Python.RESERVED_WORDS_);for(var b=[],a=Blockly.Variables.allVariables(),c=0;c<a.length;c++)b[c]=Blockly.Python.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+" = None";Blockly.Python.definitions_.variables=b.join("\n")}};
Blockly.Python.finish=function(b){var a=[],c=[],d;for(d in Blockly.Python.definitions_){var e=Blockly.Python.definitions_[d];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?a.push(e):c.push(e)}return"import minecraft.minecraft as minecraft\nimport minecraft.block as block\nimport time\n"+(a.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n")+"mc = minecraft.Minecraft.create()\n\n"+b};Blockly.Python.scrubNakedValue=function(b){return b+"\n"};
Blockly.Python.quote_=function(b){b=b.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\%/g,"\\%").replace(/'/g,"\\'");return"'"+b+"'"};
Blockly.Python.scrub_=function(b,a){if(null===a)return"";var c="";if(!b.outputConnection||!b.outputConnection.targetConnection){var d=b.getCommentText();d&&(c+=Blockly.Generator.prefixLines(d,"# ")+"\n");for(var e=0;e<b.inputList.length;e++)b.inputList[e].type==Blockly.INPUT_VALUE&&(d=b.inputList[e].connection.targetBlock())&&(d=Blockly.Generator.allNestedComments(d))&&(c+=Blockly.Generator.prefixLines(d,"# "))}e=b.nextConnection&&b.nextConnection.targetBlock();e=this.blockToCode(e);return c+a+e};
Blockly.Python.provideFunction_=function(b,a){if(!Blockly.Python.definitions_[b]){var c=Blockly.Python.variableDB_.getDistinctName(b,Blockly.Generator.NAME_TYPE);Blockly.Python.functionNames_[b]=c;Blockly.Python.definitions_[b]=a.join("\n").replace(Blockly.Python.FUNCTION_NAME_PLACEHOLDER_REGEXP_,c)}return Blockly.Python.functionNames_[b]};Blockly.Python.control={};Blockly.Python.controls_repeat=function(){var b=parseInt(this.getTitleValue("TIMES"),10),a=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(a=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+a);return"for "+Blockly.Python.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+a};
Blockly.Python.controls_repeat_ext=function(){var b=Blockly.Python.valueToCode(this,"TIMES",Blockly.Python.ORDER_NONE)||"0",b=Blockly.isNumber(b)?parseInt(b,10):"int("+b+")",a=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(a=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+a);return"for "+Blockly.Python.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+a};
Blockly.Python.controls_whileUntil=function(){var b="UNTIL"==this.getTitleValue("MODE"),b=Blockly.Python.valueToCode(this,"BOOL",b?Blockly.Python.ORDER_LOGICAL_NOT:Blockly.Python.ORDER_NONE)||"False",a=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(a=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+this.id+'"')+a);"UNTIL"==this.getTitleValue("MODE")&&(b.match(/^\w+$/)||(b="("+b+")"),b="not "+b);return"while "+b+":\n"+a};Blockly.Python.logic={};Blockly.Python.controls_if=function(){var b=Blockly.Python.valueToCode(this,"IF0",Blockly.Python.ORDER_NONE)||"False",a=Blockly.Python.statementToCode(this,"DO0")||"  pass\n";return"if "+b+":\n"+a};Blockly.Python.logic_compare=function(){var b=this.getTitleValue("OP"),b=Blockly.Python.logic_compare.OPERATORS[b],a=Blockly.Python.ORDER_RELATIONAL,c=Blockly.Python.valueToCode(this,"A",a)||"0",d=Blockly.Python.valueToCode(this,"B",a)||"0";return[c+" "+b+" "+d,a]};
Blockly.Python.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="};Blockly.Python.text={};Blockly.Python.text=function(){return[Blockly.Python.quote_(this.getTitleValue("TEXT")),Blockly.Python.ORDER_ATOMIC]};Blockly.Python.math={};Blockly.Python.addReservedWords("math,random");Blockly.Python.math_number=function(){var b=window.parseFloat(this.getTitleValue("NUM"));return[b,0>b?Blockly.Python.ORDER_UNARY_SIGN:Blockly.Python.ORDER_ATOMIC]};Blockly.Python.math_arithmetic=function(){var b=this.getTitleValue("OP"),a=Blockly.Python.math_arithmetic.OPERATORS[b],b=a[0],a=a[1],c=Blockly.Python.valueToCode(this,"A",a)||"0",d=Blockly.Python.valueToCode(this,"B",a)||"0";return[c+b+d,a]};
Blockly.Python.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.Python.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Python.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Python.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Python.ORDER_MULTIPLICATIVE],POWER:[" ** ",Blockly.Python.ORDER_EXPONENTIATION]};
Blockly.Python.math_single=function(){var b=this.getTitleValue("OP"),a,c;if("NEG"==b)return a=Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_UNARY_SIGN)||"0",["-"+a,Blockly.Python.ORDER_UNARY_SIGN];Blockly.Python.definitions_.import_math="import math";c="SIN"==b||"COS"==b||"TAN"==b?Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_MULTIPLICATIVE)||"0":Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_NONE)||"0";switch(b){case "ABS":a="math.fabs("+c+")";break;case "ROOT":a=
"math.sqrt("+c+")";break;case "LN":a="math.log("+c+")";break;case "LOG10":a="math.log10("+c+")";break;case "EXP":a="math.exp("+c+")";break;case "POW10":a="math.pow(10,"+c+")";break;case "ROUND":a="round("+c+")";break;case "ROUNDUP":a="math.ceil("+c+")";break;case "ROUNDDOWN":a="math.floor("+c+")";break;case "SIN":a="math.sin("+c+" / 180.0 * math.pi)";break;case "COS":a="math.cos("+c+" / 180.0 * math.pi)";break;case "TAN":a="math.tan("+c+" / 180.0 * math.pi)"}if(a)return[a,Blockly.Python.ORDER_FUNCTION_CALL];
switch(b){case "ASIN":a="math.asin("+c+") / math.pi * 180";break;case "ACOS":a="math.acos("+c+") / math.pi * 180";break;case "ATAN":a="math.atan("+c+") / math.pi * 180";break;default:throw"Unknown math operator: "+b;}return[a,Blockly.Python.ORDER_MULTIPLICATIVE]};Blockly.Python.math_trig=Blockly.Python.math_single;Blockly.Python.math_constant=function(){var b=this.getTitleValue("CONSTANT");"INFINITY"!=b&&(Blockly.Python.definitions_.import_math="import math");return Blockly.Python.math_constant.CONSTANTS[b]};
Blockly.Python.math_constant.CONSTANTS={PI:["math.pi",Blockly.Python.ORDER_MEMBER],E:["math.e",Blockly.Python.ORDER_MEMBER],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",Blockly.Python.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",Blockly.Python.ORDER_MEMBER],SQRT1_2:["math.sqrt(1.0 / 2)",Blockly.Python.ORDER_MEMBER],INFINITY:["float('inf')",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.variable={};Blockly.Python.getVariable=function(){return[this.getTitleValue("VARIABLE").replace(/[-=!'"\u00a3$%^&*()+<>?~@:\[\]|`\/\\{},.#]/g,"_"),Blockly.Python.ORDER_ATOMIC]};Blockly.Python.setVariable=function(){var b=this.getTitleValue("VARIABLE").replace(/[-=!'"\u00a3$%^&*()+<>?~@:\[\]|`\/\\{},.#]/g,"_"),a=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"0";return"# User defined variable \n"+b+" = "+a+"\n"};Blockly.Python=Blockly.Generator.get("Python");Blockly.Python.clampValue=function(b,a){return b>a?a:b};Blockly.Python.api_getBlock=function(){var b=Blockly.Python.valueToCode(this,"X",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"Y",Blockly.Python.ORDER_NONE)||"0",c=Blockly.Python.valueToCode(this,"Z",Blockly.Python.ORDER_NONE)||"0";return["mc.getBlockWithData(mc.player.getPos().x + "+b+", mc.player.getPos().y + "+a+", mc.player.getPos().z + "+c+")",Blockly.Python.ORDER_UNARY_SIGN]};
Blockly.Python.api_setBlock=function(){var b=Blockly.Python.valueToCode(this,"POS",Blockly.Python.ORDER_NONE)||"0,0,0",a=Blockly.Python.valueToCode(this,"ID",Blockly.Python.ORDER_NONE)||"0",b=b.split(",");return"mc.setBlock( mc.player.getPos().x + "+b[0]+", mc.player.getPos().y + "+b[1]+", mc.player.getPos().z + "+b[2]+", "+a+")\n"};
Blockly.Python.api_setBlocks=function(){var b=Blockly.Python.valueToCode(this,"POS",Blockly.Python.ORDER_NONE)||"0,0,0",a=Blockly.Python.valueToCode(this,"SIZE",Blockly.Python.ORDER_NONE)||"0,0,0",c=Blockly.Python.valueToCode(this,"ID",Blockly.Python.ORDER_NONE)||"0",b=b.split(","),a=a.split(",");return"mc.setBlocks(mc.player.getPos().x + "+b[0]+", mc.player.getPos().y + "+b[1]+", mc.player.getPos().z + "+b[2]+", mc.player.getPos().x + "+b[0]+" + "+Blockly.Python.clampValue(a[0],50)+", mc.player.getPos().y + "+
b[1]+" + "+Blockly.Python.clampValue(a[1],50)+", mc.player.getPos().z + "+b[2]+" + "+Blockly.Python.clampValue(a[2],50)+", "+c+")\n"};Blockly.Python.api_xyz=function(){var b=[this.getTitleValue("X"),this.getTitleValue("Y"),this.getTitleValue("Z")],b=b.map(window.parseFloat);return[b,0>b?Blockly.Python.ORDER_UNARY_SIGN:Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.api_xyzPlugIn=function(){var b=Blockly.Python.valueToCode(this,"X",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"Y",Blockly.Python.ORDER_NONE)||"0",c=Blockly.Python.valueToCode(this,"Z",Blockly.Python.ORDER_NONE)||"0";return[b+","+a+","+c,Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.api_setFloor=function(){var b=Blockly.Python.valueToCode(this,"X",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"Z",Blockly.Python.ORDER_NONE)||"0",c=Blockly.Python.valueToCode(this,"ID",Blockly.Python.ORDER_NONE)||"0";return"mc.setBlocks(mc.player.getPos().x - 1, mc.player.getPos().y - 1 , mc.player.getPos().z - 1 , mc.player.getPos().x - 1 + "+b+", mc.player.getPos().y - 1 , mc.player.getPos().z - 1 + "+a+", "+c+")\n"};
Blockly.Python.api_getHeight=function(){var b=Blockly.Python.valueToCode(this,"X",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"Z",Blockly.Python.ORDER_NONE)||"0";return["mc.getHeight("+b+", "+a+")",Blockly.Python.ORDER_UNARY_SIGN]};Blockly.Python.api_postToChat=function(){return"mc.postToChat("+(Blockly.Python.valueToCode(this,"TEXT",Blockly.Python.ORDER_NONE)||"''")+")\n"};Blockly.Python.api_player_getPos=function(){return["mc.player.getPos()",Blockly.Python.ORDER_UNARY_SIGN]};
Blockly.Python.api_player_setPos=function(){var b=Blockly.Python.valueToCode(this,"X",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"Y",Blockly.Python.ORDER_NONE)||"0",c=Blockly.Python.valueToCode(this,"Z",Blockly.Python.ORDER_NONE)||"0";return"mc.player.setPos("+b+", "+a+", "+c+")\n"};Blockly.Python.api_player_getTilePos=function(){return["mc.player.getTilePos()",Blockly.Python.ORDER_UNARY_SIGN]};
Blockly.Python.api_player_setTilePos=function(){var b=(Blockly.Python.valueToCode(this,"POS",Blockly.Python.ORDER_NONE)||"0,0,0").split(",");return"mc.player.setTilePos( mc.player.getPos().x + "+Blockly.Python.clampValue(b[0],100)+", mc.player.getPos().y + "+Blockly.Python.clampValue(b[1],100)+", mc.player.getPos().z + "+Blockly.Python.clampValue(b[2],100)+")\n"};Blockly.Python.api_sleep=function(){return"time.sleep("+(Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_NONE)||"0")+")\n"};
Blockly.Python.api_blockType=function(){var b=this.getTitleValue("TYPE"),a="block."+b;"TNT"===b&&(a+=", 1");return[a,Blockly.Python.ORDER_UNARY_SIGN]};Blockly.Python.api_position=function(){var b=Blockly.Python.valueToCode(this,"VAR",Blockly.Python.ORDER_NONE)||"0",a=this.getTitleValue("COORD");return[b+"."+a,Blockly.Python.ORDER_UNARY_SIGN]};
Blockly.Python.helper_getBlockType=function(b){var a="";switch(b){case 0:a="AIR";break;case 1:a="STONE";break;case 2:a="GRASS";break;case 3:a="DIRT";break;case 4:a="COBBLESTONE";break;case 5:a="WOOD_PLANKS";break;case 6:a="SAPLING";break;case 7:a="BEDROCK";break;case 8:a="WATER_FLOWING";break;case 9:a="WATER_STATIONARY";break;case 10:a="LAVA_FLOWING";break;case 11:a="LAVA_STATIONARY";break;case 12:a="SAND";break;case 13:a="GRAVEL";break;case 14:a="GOLD_ORE";break;case 15:a="IRON_ORE";break;case 16:a=
"COAL_ORE";break;case 17:a="WOOD";break;case 18:a="LEAVES";break;case 20:a="GLASS";break;case 21:a="LAPIS_LAZULI_ORE";break;case 22:a="LAPIS_LAZULI_BLOCK";break;case 24:a="SANDSTONE";break;case 26:a="BED";break;case 30:a="COBWEB";break;case 31:a="GRASS_TALL";break;case 35:a="WOOL";break;case 37:a="FLOWER_YELLOW";break;case 38:a="FLOWER_CYAN";break;case 39:a="MUSHROOM_BROWN";break;case 40:a="MUSHROOM_RED";break;case 41:a="GOLD_BLOCK";break;case 42:a="IRON_BLOCK";break;case 43:a="STONE_SLAB_DOUBLE";
break;case 44:a="STONE_SLAB";break;case 45:a="BRICK_BLOCK";break;case 46:a="TNT";break;case 47:a="BOOKSHELF";break;case 48:a="MOSS_STONE";break;case 49:a="OBSIDIAN";break;case 50:a="TORCH";break;case 51:a="FIRE";break;case 53:a="STAIRS_WOOD";break;case 54:a="CHEST";break;case 56:a="DIAMOND_ORE";break;case 57:a="DIAMOND_BLOCK";break;case 58:a="CRAFTING_TABLE";break;case 60:a="FARMLAND";break;case 61:a="FURNACE_INACTIVE";break;case 62:a="FURNACE_ACTIVE";break;case 64:a="DOOR_WOOD";break;case 65:a="LADDER";
break;case 67:a="STAIRS_COBBLESTONE";break;case 71:a="DOOR_IRON";break;case 73:a="REDSTONE_ORE";break;case 78:a="SNOW";break;case 79:a="ICE";break;case 80:a="SNOW_BLOCK";break;case 81:a="CACTUS";break;case 82:a="CLAY";break;case 83:a="SUGAR_CANE";break;case 85:a="FENCE";break;case 89:a="GLOWSTONE_BLOCK";break;case 95:a="BEDROCK_INVISIBLE";break;case 98:a="STONE_BRICK";break;case 102:a="GLASS_PANE";break;case 103:a="MELON";break;case 107:a="FENCE_GATE";break;case 246:a="GLOWING_OBSIDIAN";break;case 247:a=
"NETHER_REACTOR_CORE";break;default:a="GLASS"}return"block."+a};