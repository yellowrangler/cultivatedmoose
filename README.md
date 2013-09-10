cultivatedmoose
===============

Cultivated Moose Shoping

This app will become a shopping portall to a quilted wallet and canvas bag store. Built with angular and jquery.

This has been both an increadably frustrating and exciting undertaking. The more I delve into the angular abyss the more I like it.  I have tried to keep to the following philosphy:
- Factories manage ajax calls to mysql tables via php
- Services hold static data and pass it back to controllers which via $scope make the data available to Directives
- Controllers manage all initialization (equivilant of jquery ready) and prepare data for view / display
- Directives which took a looong time to get any traction on I  know really like. I use them to manage re-occuring template like displays / widgets. Data for Directives being passed in JSON contsructs in some cases.

This is still a work in process. The product image data is raw and in some cases redundent and nonsensical. I am setting up a product shoot box and hope to replace these current product images with updated ones soon.

I have built this on a Mac Book Pro utilizing Tower (git). My web server is old dell desktop running fedora 18 linux with NGNX. Besides angular I use boostrap and jquery. My ajax modules are PHP with mysql schemas.
