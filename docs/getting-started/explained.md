# Appkite Explained

## Preamble

The Web already has web components, which makes it possible to share complex DOM elements with others. This is fine for many things, but when a UI gets more complex and deep integration is needed from one component to another, a more specified interface between the components is needed.

Security is another issue: When a webcomponent is added to a page it has full access to that DOM as any other HTLM element. This is not always desired if you have 3rd party developers creating components or apps for your UI.

The goal for appkit is to:

* Simplify the development of a secure app within your ecosystem.
* Minify UI dependability on apps.
* Extend the integration possibility for apps.
* Make it easier for the end user to use apps

### Built on known principles

We already know app related principles from Apple's Appstore and Google's Play store. A user has apps installed when he turns on his device. He can install more apps as he pleases. Each app can refer to another app that fx. can open a specific type of data. Appkit aims at delivering a tiny layer for your web UI that mimics the app support found in mobile devices.

## Apps 

An app contains the main functionality and takes up all the space in the main view.

Any smartphone has an area containing all your apps. So if you installed an app, you will know that it can be found here. Similar to that, we should have an app space, where apps resides when installed. It will make it easy for the end user to see the apps they have bought and installed and open them when needed. Even though an app installation can also deliver widgets and extensions (described below), the main functionality of an app should reside within the actual app.

This will mimic what the user is used to from their own personal phone. The user can easily get an overview of all the apps they have and uninstall the ones they do not want anymore. When they open the app it will take up the whole main view putting full focus on the app's content.

It can be done by having a designated menu item pointing directly to apps. Here all apps can be found including the app store app. Each app will have no other places to be displayed (except for the widget UI explained below). Having such restrictive UI rules for apps makes our UI independent of the apps and vice versa. It lets us change the Xena UI as we like and the app developer change the app UI the way he wants.

## Widgets

A Widget is a small self-contained UI element giving one specific information

Creating widgets gives a very specific and compact piece of functionality from the app. For example a dashboard can consist of widgets. Unlike Apps, Widgets can be instantiated multiple times.

We see the same today on both Android phones and iPhones that allows the user to insert their preferable widgets to the "dashboard". The user is allowed to select the placement of the widget and often also the size, but even so the widget needs to fit within specific UI boundaries and there is only one technical interface to it which makes it easy to document and implement.


# Extensions

An extension is a UI-less function that extends a core feature in Xena

Very often we need very specialized functionality for an app. For example the SMS app currently adds a "plugin" to the order page in order to be able to send SMS to the partner. However that does not mean that the user will be able to send an SMS to the partner from anywhere in the system - only from that specific spot. To be able to send an SMS to the partner from every possible place he appears, we would need to create an insane amount of plugin locations, the app developer would need to create and setup an insane amount of plugins and we would be even more locked in to the current design because of the many plugin locations.

Instead we should define how to extend core functionality of Xena just like seen on any phone today in the same way as Apple does it with their iPhones. This could allow the app developer to create an extension for his app that allows for sending a message for example. If a developer then creates an "SMS message" extension, then our UI can reuse that extensions anywhere it pleases and with the UI we define.

Extension examples could be:

* Sharing (Open in...)
* Actions (Print, Export, Copy, SMS to Partner)
* Browse (Select document, contact, etc.)

There could be more as we go along, but for now these are explained in detail blow. By allowing for extending Xena this way gives us the following benefits:

It ensures us that we will always be able to change the UI the way we see fit.
The 3rd party developer does not need to know anything about the UI in which his extension will be placed.
His extension can be used throughout the entire UI of Xena.

We will surdenly have our own extensions that comes out of the box. These should be implemented in the same way as a 3rd party developer would. They should be part of an (hidden?) app that comes bundled with Xena and which brings our core widgets to the dashboard. These could be extensions like emailing a document, editing a photo etc..

### Sharing extension

Any app must be able to specify types of content it can display information for. For example an app could define that it can display data for Orders and Partners. Then in detailed views for Orders and Partners the app will appear as being able to open that entity. We could also choose to add such an app reference directly in tables that lists that type of data. That will allow the user to have fx. a list of orders and for each order in the list select to open directly in a specific app instead of going into the order detail view just to open that order in a specific app.

When the user selects "Open with myApp" then an overlay (fx. a drawer or a full-screen popup) slides in with the containing myApp. The app will be requested to display information relevant to the entity the user wants to see details about and it is then up to myApp to display them. By using an overlay for the app instead of a tab (as we use extensively in Xena today) we become UI-independent of the app and we are free to change the Xena UI as we please without for 3rd party developers to update the UI of their apps.

The overlay should be easy to click away fx. via a close icon or by clicking the background outside of the overlay. The app should be designed to look great in both the designated app area as well as the overlay when opened as an extension.

When the user selects the extension, that app can choose what is wants to do with the data. It simply retrieves an object containing mime type (fx. application/xena.partner) and an uri (fx. content://partner/123). One example is, if the currently viewed page is a detailed view of a partner, then the extension can choose to 1) read the partner data, 2) create a vcard of the partner and 3) send that via mail. Bottomline is that the extension is just a function that promises to handle a piece of data.

### Action extensions

An Action Extension can allow for changing the current data. For example if document is the current entity, then an action could be created for annotating the document. The extension could open up a dialog that allows to annotate the current document and persist it afterwards.

Another action could be printing, which could take fx. a currently viewed order, retrieve its invoices as PDF and print them.

Just like the Sharing Extension, then app simply retrieves an object containing mime type and an uri that allows the app to read the data. But unlike the Sharing Extension, the Action Extension also returns mime type and uri of the result after the action has occured.

### Browse extensions

TBD

 





