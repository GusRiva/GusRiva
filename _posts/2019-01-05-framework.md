---
layout: post
title: Oxygen Frameworks
image: /img/framework.png
---

I started learning the TEI encoding back in 2013. I took classes and workshops on the subject and collaborated in a series of projects as encoder. In some of the courses I attended we delved into the intrincancies of XQuery and XSLT. We always worked using (Oxygen)[https://www.oxygenxml.com/]. **And no one ever mentioned the Oxygen author mode and Oxygen Frameworks**. I recently found out about it, almost by chance, and it radically changed my way of working on XML-TEI. I can't conceive all the time I've spend encoding XML without using it. (Disclaimer: Oxygen is not paying me to say this.)

So, anyone else wondering what Oxygen Frameworks are: it's a way of creating a real time visulization of your TEI file as well as adding custom commands. This means that, instead of having to read around the tags in XML, one can create a CSS file to visualize the text in a much clearer way. For example, you can view decorations as colored letters instead of text surrounded by a *\<hi>* tag. On the other hand, you can create custom commands in a new toolbar or with keyboard shortcuts, which allows you to perform a variety of actions. For example, you can insert elements or series of elements with attributes just by pressing two keys at the same time. These actions can be customized to ask the user for information in small pop-ups (for example, if the attribute for the element need to be inserted by the user). 

These simple features make the process of writing a TEI text so much easier, faster and realiable. Specially for complexely annotated texts, like medieval manuscripts, the use of an Oxygen Framework is a must. You could always crete your own tool to edit XML in a nice visualization and with custom commands, but if you are already using Oxygen, just go for the Author Mode. It's very easy to set up. With some basic knowledge of CSS and XPath anyone should be able to (create a basically functioning framework)[http://digiversity.net/2013/tutorial-wie-baue-ich-ein-oxygen-xml-framework/]. I speak from experience as I've spent the last couple of months creating a (framework for the transcription of medieval narrative texts composed in rhyming couplets)[https://github.com/iwein-digital/oxygen-frameworks], primarily for the edition of Harmann von Aue's *Iwein*.


