<style type="text/css">
.section-article p {
    width:90%;
}

.imgpointer:hover {
    cursor:pointer;
}
</style>

<div class="row" style="padding-left:75px;padding-top:135px;" >
<div class="span12">
<h2>SendPicCip IOS iPhone Aplication</h2>

<div style="position:relative;display:block;padding-top:20px;">
<p>I wrote SendPicClick originally for my own use. I like to walk, and as I do, I find that there are various images 
I would like to share with friends and family. I didn't want to use some uber-broadcasting medium like Facebook, so I 
created this app.</p>
<p>The app works quite simply. You select the </p>
<img height="60" src="img/sendpicclipicon.png">
</div>
</div> <!-- end of span12 -->
</div> <!-- end of row -->

<div style="padding-left:75px;padding-top:20px;" class="row">
<div class="span4">
and are presented with the  following screen:
<img align="middle" style="padding-left:70px;padding-top:25px;height:250px;" id="start" class="imgpointer" src="img/sendpicclipstart.png">
</div> <!-- end of span4 -->

<div class="span8" style="font-size:18px;">
From this menu you can do the following:
<ul style="padding-top:25px;">
<li style="padding:5px;"><a data-ng-click="goToInternalHash('takepicture', 115)" style="cursor:pointer;text-decoration:none;">Take a Picture</a></li>
<li style="padding:5px;"><a data-ng-click="goToInternalHash('takevideo', 115)" style="cursor:pointer;text-decoration:none;">Take a Video</a></li>
<li style="padding:5px;"><a data-ng-click="goToInternalHash('selectcontacts', 115)" style="cursor:pointer;text-decoration:none;">Select Contacts</a></li>
<li style="padding:5px;"><a data-ng-click="goToInternalHash('viewcontacts', 115)" style="cursor:pointer;text-decoration:none;">View Selected Contacts</a></li>
<li style="padding:5px;"><a data-ng-click="goToInternalHash('clearcontacts', 115)" style="cursor:pointer;text-decoration:none;">Clear Selected Contacts</a></li>
</ul>
</div><!-- end of span8 -->
</div> <!-- end of div row -->

<div style="padding-left:75px;padding-top:35px;" class="row">
<div class="span11">
<h3 id="takepicture">Take a Picture</h3>
You can not take a picture until you have selected one or more contacts from your contact list.
 Once you have done this just point the iPhone and select the <span style="color:maroon;font-weight:bold;">Take Picture</span> button. You will be presented 
 with the iPhone camera interface. Take your picture and an email will come up with the picture attached
 and you contacts filled in. You may add people, change the subject - all the same functionality as if 
 you created the email from your email app. When you are finished select Send and the email with your 
picture will be on its way.
</div>
</div> <!-- end of span11 -->
</div> <!-- end of div row -->

<div style="padding-left:75px;padding-top:35px;" class="row">
<div class="span11">
<h3 id="takevideo">Take a Video</h3>
You can not take a video until you have selected one or more contacts from your contact list.
 Once you have done this just point the iPhone and select the <span style="color:maroon;font-weight:bold;">Take Video</span> button. You will be presented 
 with the iPhone video camera interface. Take your video and when finished an email will come up with the video attached
 and you contacts filled in. You may add people, change the subject - all the same functionality as if 
 you created the email from your email app. When you are finished select Send and the email with your 
video will be on its way.
</div>
</div> <!-- end of span11 -->
</div> <!-- end of div row --> 

<div style="padding-left:75px;padding-top:35px;" class="row">
<div class="span11">
<h3 id="selectcontacts">Select Contacts</h3>
The select contacts function brings up a list of all the contacts in your iPhone Contacts app. The contacts list will appear 
as follows:
</div> <!-- end of span11 -->
</div> <!-- end of div row -->

<div style="padding-left:75px;padding-top:25px;" class="row">
<div class="span3">
<img align="middle" style="padding-left:70px;padding-top:5px;height:250px;" id="sclist" class="imgpointer" src="img/contactslist.png">
</div> <!-- end of span3-->

<div class="span6">
This list will have check boxes next to all you contact names. Checking on any check box immeadeatly includes that 
conatct in your list. Un checking the check box removes that contact form your list. 
<br /><br />The contacts are listed in email 
alphabetical order. You can also search for a contact from the search box at the top of the form. You can return to the 
main page by hitting the back button or swiping right.
</div> <!-- end of span6 -->
</div> <!-- end of div row -->

<div style="padding-left:75px;padding-top:35px;" class="row">
<div class="span11">
<h3 id="viewcontacts">View Selected Contacts</h3>
The view selected contacts function brings up a list of all the contacts that you have currently selected. The selected contacts list will appear 
as follows:
</div> <!-- end of span11 -->
</div> <!-- end of div row --> 

<div style="padding-left:75px;padding-top:25px;" class="row">
<div class="span3">
<img style="padding-left:70px;padding-top:5px;height:250px;" id="vclist" class="imgpointer" src="img/viewselected.png">
</div> <!-- end of span3-->

<div class="span6">
You can un select any contacts that are currently checked. But you can not add any.
<br /><br />
You can return to the 
main page by hitting the back button or swiping right.
</div> <!-- end of span6 -->
</div> <!-- end of div row -->

<div style="padding-left:75px;padding-top:35px;" class="row">
<div class="span11">
<h3 id="clearcontacts">Clear Selected Contacts</h3>
The clear selected contacts function removes all previously selected contacts from your list. When selected, the 
<span style="color:maroon;font-weight:bold;">Clear Selected Contacts</span> will show the following dialog:
</div> <!-- end of span11 -->
</div> <!-- end of div row --> 

<div style="padding-left:75px;padding-top:25px;" class="row">
<div class="span3">
<img style="padding-left:70px;padding-top:5px;height:250px;" id="cclist" class="imgpointer" src="img/clearcontacts.png">
</div> <!-- end of span3 -->

<div class="span6">
After selecting this option, you will need to go back and create a new select contacts list before taking taking pictures or videos.
</div> <!-- end of span6 -->
</div> <!-- end of div row -->

<div style="padding-left:75px;padding-top:35px;" class="row">
<div class="span11">
I hope you enjoy using this as much as I do. Please feel free to contact me with any ideas or other useful comments at <a href="mailto:yellowrangler.me@gmail.com?Subject=SendPicClip%20Commnets">Yellowrangler</a>
</div> <!-- end of span11 -->
</div> <!-- end of div row -->

<div style="padding-bottom:75px;">&nbsp;</div>

<script src="Scripts/sendpicclip.js"></script>