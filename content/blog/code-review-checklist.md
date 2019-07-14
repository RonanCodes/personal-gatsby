---
title: Code Review Checklist ✅
published: false
description: Clarify your intuition around code quality & best practices by using a CR checklist.
tags: codereview, codequality, cleancode, bestpractices
date: '2019-07-14'
slug: ''
discussionId: 2019-07-14_code-review-checklist
coverImage: /images/code-review-checklist-wide.png
category: blog
---

CR (Code Review) checklists are a powerful tool.

They allow you to organise your own thoughts & intuitions on what you look out for when reviewing other peoples code.
Essentially they are a reflection from your point of view of what constitutes best practices, clean-code, and good code quality.

Everyone has a checklist, most don't write it down.
By not writing it down it makes it hard to prioritise what's important.

## ❓ What should my checklist include?

Different people, teams, and organizations will have different items on their checklist, with their priority in differing orders, and the enforcement of each item at different levels.
And all of these things will change over time, especially during when deadlines are close!

Most of the time it's to do with code quality, design patterns, tests, formatting, and styles of programming.

### My current CR checklist:

Below is an example of a CR checklist; this is my current CR checklist (and will most likely look different in a weeks time! 👀).

1. **No bugs are being introduced.**

   If you find a scenario where the new code may be introducing a bug.

1. **Methods & Classes have a singular purpose.**

   Remember SRP (Single Responsibility Principle) from Uncle Bobs [SOLID](https://en.wikipedia.org/wiki/SOLID) principles.

1. **Names should be meaningful.**

   Classes, methods, and properties should have names that describe what they do.
   A method/class name should describe **what** it does, and a comment may be added to explain the **why**.

   > If you find yourself writing comments in your code, it may be a sign that you need to make the name more meaningful or break your method into multiple methods.

1. **Naming should be consistent.**

   If you name one property: `personCount`, don't name the next property: `countAnimal`.

1. **Follow current patterns.**

   Your project will develop certain patterns or ways of doing things over time.
   If you are breaking the pattern you should have a good reason for doing so.
   This is an example of a good time to self annotate your PR.

1. **All method logic paths are tested.**

   Make sure that every branch of logic is tested.

   > There are some code coverage tools that will enforce this. If you are testing web components then trigger the method calls through the UI.

1. **HTML Template logic is tested.**

   Make sure to test the logic in the HTML template, such as showing/hiding elements.

   > Most of these assertions should be done when testing the method, but sometimes you will need a specific test for some HTML template binding.

1. **Project style & formatting standards adhered to.**

   Having consistent code formatting matters.
   Imagine reading a book where the font-face, font-color, font-size, and line indentation was different on every paragraph.
   It would be difficult to read, and incredibly difficult to update (maintain) and find typos (bugs).

   > This is often a good candidate for automation (The likes of [Prettier](https://prettier.io/) and [TSLint rules](https://palantir.github.io/tslint/) can help here).

1. **Add documentation to the required methods.**

   Some teams will require everything to have a method doc, others will require only public methods, and some will have it as optional for complex methods.

   > You can automate this check and fail the build if certain methods are missing documentation. TSLint can help enforce JSDoc rules: https://www.npmjs.com/package/tslint-jsdoc-rules

1. **Documentation is meaningful.**

   A method/class doc comment should be the **why** not the **what**.
   The method/class name should be self-descriptive, leaving the doc to be the **why**.

   > Avoid this kind of **what** doc: "The add method". Instead, state the why or don't add the doc at all.

## ⭐ Benefits of writing it down

1. **Prioritise important items.**

   By writing down what you look out for when reviewing code, it allows you to prioritise what's important.
   You may find that most CR comments are to do with formatting and styling issues; these types of comments may be at the bottom of your CR checklist and hence should either be less strict or should be ideally automated.
   During certain times in a project delivery takes precedence over code quality and as such you can be less strict on items lower down in the list.

1. **Share the checklist with colleagues.**

   They may be missing items that you have, and vice versa.
   They can give their view on why particular items should be at different priorities.

1. **Gives confidence and passes on intuition to juniors.**

   Junior engineers won't have the intuition or experience to know what to look for when reviewing code, and often the case they won't review code or will just approve as they don't want to give an incorrect comment.
   By having a checklist it gives juniors the confidence to give CR comments.

## 🤷 When to use the CR checklist

1. **When reviewing other peoples code.**

   Instead of including all items in your initial look through each file, you could instead flick through the files checking for the top 5 items, and then flick through the files again with the next 5; this can help with really big PRs, or WIP (work in progress PRs); as they can become overwhelming.

1. **When writing your own code.**

   As you write your own code, always keep your CR checklist in mind; like a little code quality angel watching over you.
   Ideally you would print out your CR checklist and stick it up beside your monitor (👼 Angel doodle required).

1. **When you open your code for review.**

   Review your own code before sending it to others.
   Often you are in such a scramble to get your feature working and tests written that you miss basic stuff.

## 📝 Summary

This is my current CR checklist and it will most likely be different in a weeks time.

Treat it like an ever evolving document that reflects your vision of code quality.

## 💭 Thoughts

What's on your checklist?  
Have a missed anything on my list that you think I should add?  
Do you disagree with the priority of my items?

Please comment with your thoughts below! 🙃
