# Social Ads Module for Angular

This is an Angular module to display remote ads from the Techjoomla [Social Ads extension](https://techjoomla.com/products/social-ads). You can learn more about remote ads and multi site ad delivery [here](https://techjoomla.com/socialads-3.1-documentation/multi-site-ad-delivery)

## Usage
To load remote ads in an angular app, you can use the below code on your template

`
<app-social-ads 
  [baseUrl]="apiBaseUrl" 
   ad_unit="sa_ads29" 
   zone=31 
   num_ads=4 
   ad_rotation=0 
   height_img=250 
   no_rand=0>
</app-social-ads>
`

These attributes are the same that can be configured when getting the widget code in Social Ads. This will load the iframe for the ads based on the configuration provided. 
