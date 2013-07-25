yellowranglerApp.service('techService', function () {
    this.getTechs = function () {
        return techs;
    };


    this.getTechMsg = function (tag) {
        for (var i = 0; i < techs; i++) {
            if (techs[i].tag === tag) {
                return techs[i].tag;
            }
        }
        return null;
    };

    // this.getTechPanel = function (panel) {
    //     for (var i = 0; i < techs; i++) {
    //         if (techs[i].panel === panel) {
    //             return techs[i].panel;
    //         }
    //     }
    //     return null;
    // };

    //
    // message strings
    //
    var backboneMsgStr = "This is a completed demo from Adrian Mejia on backbone.js. It ultimately creates a todo list leveraging backbone.js with underscore";
    backboneMsgStr = backboneMsgStr + " templates. It covers the following components of building a backbone application. ";
    backboneMsgStr = backboneMsgStr + "The data model uses HTML 5 local storage.";
    var jqgridMsgStr = "This is an example of the jqGrid plugin I put together. It gets its data from MySQL table using php from a jquery ajax call.";  
    var jqDragDropMsgStr = "This is an example of the jQuery drag and drop plugin.";
    var datepickerMsgStr = "This is an example of the jQuery date picker plugin.";
    var spinnerMsgStr = "This is an example of the jQuery spinner plugin.";
    var tabsMsgStr = "This is an example of the jQuery tabs plugin.";
    var angularjsMsgStr = "This is an example of the angularjs. This application manages a contacts list. That list is stored on a mysql table through an angular defined factory.";

    //
    // demolinkstrings
    //
    var backboneDemoStr = "wtech/backbone/backbone.html";
    var jqgridDemoStr = "wtech/jqgrid/jqgrid.php";  
    var jqDragDropDemoStr = "wtech/dragdrop/dragdrop.php";
    var datepickerDemoStr = "wtech/datepicker/datepicker.php";
    var spinnerDemoStr = "wtech/spinner/spinner.html";
    var tabsDemoStr = "wtech/tabs/tabs.html";
    var angularjsDemoStr = "wtech/angularjs/index.php";



    //
    // code link strings
    //
    var backboneCodeStr = "wtech/includes/tocode.php?codepages=../backbone/backbone.html~../../Scripts/backbone.js~../../css/backbone.css";
    var jqgridCodeStr = "wtech/includes/tocode.php?codepages=../jqgrid/jqgrid.php~../../Scripts/dragdrop.js~../../css/dragdrop.css";  
    var jqDragDropCodeStr = "wtech/includes/tocode.php?codepages=../dragdrop/dragdrop.php~../../Scripts/dragdrop.js~../../css/dragdrop.css";
    var datepickerCodeStr = "wtech/includes/tocode.php?codepages=../datepicker/datepicker.php~../../Scripts/datepicker.js~../../css/datepicker.css";
    var spinnerCodeStr = "wtech/includes/tocode.php?codepages=../spinner/spinner.html~../../Scripts/spinner.js~../../css/spinner.css";
    var tabsCodeStr = "wtech/includes/tocode.php?codepages=../tabs/tabs.html~../../Scripts/tabs.js~../../css/tabs.css";
    var angularjsCodeStr = "wtech/includes/tocode.php?codepages=../angularjs/index.php~../angularjs/app/contactApp.js~../angularjs/app/partials/ContactsListAdd.html~../angularjs/app/partials/ContactsListBlock.html~../angularjs/app/partials/ContactsListShort.html~../angularjs/app/factories/factories.js~../angularjs/app/controllers/controllers.js";

    var techs = [
        {
            title: 'backbone.js', 
            msg: backboneMsgStr,
            tag: 'backbone', 
            demolink: backboneDemoStr,
            codelink: backboneCodeStr, 
        },
        {
            title: 'jQuery jqGrid plugin', 
            msg: jqgridMsgStr,
            tag: 'jqgrid', 
            demolink: jqgridDemoStr,
            codelink: jqgridCodeStr, 
        },
        {
            title: 'jQuery Drag and Drop Example', 
            msg: jqDragDropMsgStr,
            tag: 'jqDragDrop', 
            demolink: jqDragDropDemoStr,
            codelink: jqDragDropCodeStr, 
        },
        {
            title: 'jQuery Date Picker widget', 
            msg: datepickerMsgStr,
            tag: 'datepicker', 
            demolink: datepickerDemoStr,
            codelink: datepickerCodeStr, 
        },
        {
            title: 'jQuery spinner widget', 
            msg: angularjsMsgStr,
            tag: 'spinner', 
            demolink: spinnerDemoStr,
            codelink: spinnerCodeStr, 
        },
        {
            title: 'jQuery tabs widget', 
            msg: tabsMsgStr,
            tag: 'tabs', 
            demolink: tabsDemoStr,
            codelink: tabsCodeStr, 
        },
        {
            title: 'Angularjs Example', 
            msg: angularjsMsgStr,
            tag: 'angularjs', 
            demolink: angularjsDemoStr,
            codelink: angularjsCodeStr, 
        }
    ];

});