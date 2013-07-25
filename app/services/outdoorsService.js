yellowranglerApp.service('outdoorsService', function () {
    this.getOutdoors = function () {
        return outdoors;
    };


    this.getOutdoorMsg = function (tag) {
        for (var i = 0; i < outdoors; i++) {
            if (outdoors[i].tag === tag) {
                return outdoors[i].tag;
            }
        }
        return null;
    };

    this.getOutdoorPanel = function (panel) {
        for (var i = 0; i < outdoors; i++) {
            if (outdoors[i].panel === panel) {
                return outdoors[i].panel;
            }
        }
        return null;
    };

    var outdoors = [
        {
            title: 'Will Cutler on the Appalachian Trail', 
            msg: 'My son Will started hiking the Appalacian Trail in March. Starting in Georgia he is working his way up to Maine. As I get details I will add them to this post.', 
            tag: 'appalachian', 
            panel: 'app/load/appalachian.php'
        },
        {
            title: 'Whats happening on Cape Cod Town of Orleans', 
            msg: 'Orleans in Cape Cod has it all; fishing, beaches, BBQ, bycicle paths galore and sharks. It doesnt get any better then that!', 
            tag: 'capecod', 
            panel: 'capecod.php'
        }
    ];

});