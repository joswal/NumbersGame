<%-- 
    Document   : index
    Created on : 12-Oct-2017, 12:34:41
    Author     : hp 8460p
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="assets/styles/helpers.css" rel="stylesheet" type="text/css"/>
        <link href="assets/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/styles/dialogStyles.css" rel="stylesheet" type="text/css"/>
        <link href="assets/styles/myCss.css" rel="stylesheet" type="text/css"/>
        <script src="assets/scripts/jquery-1.6.2.min.js" type="text/javascript"></script>
        <title>JSP Page</title>
    </head>
    <body class="noborder nomarginright nopaddingright ">
        <div id="wrapper" class="double-padding-vertical">
            <div class="parts">
                <div class="double-marginleft table parts">
                    <div class="quarterwide parts left table height-500 wrapper"> 
                        <div class="center parts double-marginleft">
                            <div>High Score</div>
                            <div class="bigtext bold highScore">0</div>
                        </div>

                        <div class="right parts ">
                            <div>Current Score</div>
                            <div class="bigtext bold redtext center score" >0</div>
                        </div>
                        <div class="double-padding-vertical center">
                            <div class="table radius minibtn goldbtn parts marginbottom breadth play">
                                <i class="fa fa-play"> Play </i> 
                            </div>
                            <div id="pause" class="table radius minibtn goldbtn parts marginbottom breadth">
                                <i class="fa fa-pause"> Pause </i>
                            </div>
                            <div class="table radius minibtn goldbtn parts marginbottom breadth refresh">
                                <i class="fa fa-refresh"> Restart </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scale relative black whitetext threequarterwide parts height-600 par double-margintop margin-vertical">
                <div class="grid" id="grid-1"></div>
                <div class="grid" id="grid-2"></div>
                <div class="grid" id="grid-3"></div>
                <div class="grid" id="grid-4"></div>
                <div class="grid" id="grid-5"></div>
                <div class="grid" id="grid-6"></div>
                <div class="grid" id="grid-7"></div>
                <div class="grid" id="grid-8"></div>
                <div class="grid" id="grid-9"></div>
                <div class="grid" id="grid-10"></div>
                <div class="msgBack hide-on-load">
                    <div class="table height-500 center">
                        <p id="pausemsg" class="table-cell blacktext bigtext grey center bold double-margintop transparent">Game paused!</p>
                    </div>
                </div>
            </div>
        </div>
        <script src="assets/scripts/NGmainscript.js" type="text/javascript"></script>
    </body>
</html>
