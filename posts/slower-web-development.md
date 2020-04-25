---
layout: post-layout.njk
title: Slower web development
date: 2019-02-26
tags: ["post"]
---

Finding balance in cultures of relentless growth

Lately, I have read stuff that have made web development a lot more of a nuanced craft for me. It mostly concerns ethics, sustainability, web standards, and the open web platform itself.

From surveillance capitalism to impending global climate collapse, questions of **ethics **and **sustainability **have become more prominent in public consciousness lately. Increasingly, they need to be taken into account in our decision-making process. And that includes web development!

Caring about web performances, bundle sizes, semantic, accessibility to people with different genetic makeup and circumstances — these things affect [lives](https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/)and [environment](https://serving.green/). Admittedly, they are not easy — or even realistic given the current pervasive break-neck culture — to carry out, but learning, advocating and doing them in the daily live as a developer would be, in my opinion, a good practice to build the character, attitude and sensibility that would prove to be useful when we impact the world outside of our job.

The following sections are the few areas in front-end development that I think currently violate ethics and sustainability, and how they were due to eschewing the web standards and platform itself, largely in favor of developer’s experience(DX) rather than user’s experience(UX). I should also add that much of this was written from the perspective of a ‘[indie hacker](https://www.indiehackers.com/)’/designer; I might be missing something(please correct me in the comments!) and you might disagree with the technicalities, but please try to consider their implications in terms of ethics and sustainability **in a broader context**.

## CSS

The first big one that I don’t see more people talking about is the ubiquitous usage and butchering of CSS **classes**. Do you know that classes were never really meant for styling in the markup level? Classes should be used mainly for grouping elements, doing layout, and the occasional styling of element’s states — *if you must — *for example giving a button red background color.

Here is what the web standard body W3C have to [say in that regard](https://www.w3.org/TR/WD-css2-971104/selector.html#h-6.3.2):

> _CSS gives so much power to the “class” attribute, that in many cases it doesn’t matter what HTML element the class is set on — you can make any element emulate almost any other. Relying on this power is not recommended, since it removes the level of structure that has a universal meaning (HTML elements). A structure based on “class” is only useful within a restricted domain, where the meaning of a class has been mutually agreed upon._

Here are two instrumental articles that changed a good chunk of my worldview in front-end development:

- [Meaningful CSS: Style Like You Mean It](https://alistapart.com/article/meaningful-css-style-like-you-mean-it)
- [CSS Inheritance, The Cascade And Global Scope: Your New Old Worst Best Friends](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)

My takeaway from those two articles was: you know those cutting edge CSS practices and tools like the **BEM**, **OOCSS**, **Tailwind CSS**, and **CSS-in-JS** libraries? Well, you don’t need them! Here are the reasons: they bloat web pages, make pages less semantic, make front-end development less accessible to HTML/CSS trained designer/developer folks, and dramatically increase the learning curve and barrier of entry for new people. Always try to leverage CSS’s built-in mechanism! Read the articles! ❤️

We don’t need more CSS frameworks too. They bloat. Think twice before throwing in Bootstrap’s massive load of classes. If you have read the two articles shared above, you would have an idea styling your UI components. You don’t have to do it all in one huge index.css file either; you can break it up into individual[component_name].css files, then put them together with webpack! Don’t worry I will write about this to show how 👊

Also avoid any frameworks for CSS Flexbox and CSS grid because themselves [**are the framework**](https://youtu.be/0Gr1XSyxZy0?t=508) already! And to complete this crusade, hell, avoid **SCSS** too! Instead, opt for [calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)and [custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables). Lots of people fancy the nesting capability in SCSS. I get it, I loved it too — it’s convenient and it just seemed so…logical. But if you nest according to the markup, it quickly gets out of hand, producing long chained selectors, bloating CSS files and reduces CSS parsing performance in the browser.

However, I do realize that SCSS would help maintainability in some use cases, such as [building a fluid typography](https://codepen.io/MadeByMike/pen/bEEGvv) system. And if I do use it, I would remind myself not to add too many abstractions(that reminds me of the [AHA programming](https://kentcdodds.com/blog/aha-programming) principle); keep it readable for entry-level programmers. 💌

## Javascript

I have also started \*weighing rigorously the merits of **front-end frameworks**, specifically **React**, before using one in my projects.

Until recently, I had always been a big believer in React and its popular tool chain create-react-app that makes bootstrapping a React app a breeze for developers, for no reasons other than their popularity and convenience afforded to developers in terms of shorter development time and tons of helpful community’s guides, support, and libraries to get the job done.

However, I have come to accept that these frameworks bloat, big time at that, to the detriment of end users, especially those with low-end devices(You ever used Typeform on a Moto G? Yeah it’s not great). It gets worse when you throw in those ready-made libraries in the ecosystem, passing down the [cost of Javascript](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) to end users. Bottom line is, the wellness afforded to developers doesn’t necessarily trickle down to the end users.

We need to be more careful about this.

Further, there is a more pernicious effect of being a major user of a particular web framework: My whole intellect had been unwittingly locked into their walled-garden ecosystem: I spent so many hours doubled down on React, reading tons of articles on best practices and the ever changing suite of libraries that have gained traction in the community, to a point that I had forgotten about the existence of web standards and how much they had advanced since the peak of jQuery boom. If React and create-react-app were to disappear or fallen out of favor one day(and they will), I would have to start the learning process all over again, but this time dictated by a new throne and the influential thoughtleaders.

Well, guess what, now I have changed my ways.

I have gotten into the habit of looking for frameworks that are ‘closer to the metal’; those that are **lightweight** and respect the web standards, in this context, the native [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

Here is a good place to start on Web component:
[open-wc](https://open-wc.org/)

Other promising alternatives to React that are both lightweight and performant are [hyperapp](https://github.com/jorgebucaran/hyperapp) and [preact](https://preactjs.com/) although they are not exactly web standard compliant, plus, due to their implementation of Virtual DOM, they won’t be exactly kind to the precious resources of billions of users who happened to be born outside of the [Western Wealthy Web](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/).

> VDOM diffing is just one of many examples of a framework choosing developer experience or simplicity of implementation over being frugal with their end-user’s resources. — [source](https://dassur.ma/things/when-workers/)

I have also stopped using ‘create-react-app’ to bootstrap my projects. I choose to learn to wire things up to solve my specific immediate needs. However, I need to be careful that I **don’t fall to the temptation** of ‘reinventing the wheels’. I would search for narrow-focused, utilitarian, nano-size, framework-agnostic libraries as those utilized by the [choojs](https://github.com/choojs/choo) framework. If the libraries are actively maintained, perfect. Otherwise, due to their small footprint in codes, I would be able to study their arts before I fork them. Though, should I failed to wrap my head around their codes, then I would be forced whipping one up myself.

For example, I most likely wouldn’t reinvent another state management solution like Redux even though I think I can pull it off myself, because Redux is already best at that without sacrificing extensibility. Another wheel you shouldn’t re-invent is authentication and encryption even though you *think *you can unless you are an expert in those particular domains.

## Finding the Balance 🌄

So how do we find a balance that meets our criterion for ethics, sustainability, and respects for web standards?

Although resourceful companies have been making their own strides in recognition of these issues, for budding businesses, I don’t see how we can meet halfway in the current climate of obsession for rocket-ship/hockey stick growth and “[struggle porn](https://medium.com/@nateliason/no-more-struggle-porn-202153a01108)” where the “move fast and break things” ethos is deeply entrenched.

How do we adapt our business and personal aspiration with respect to these new expectations while taking care of everyone’s mental health well-being?

Because let’s face it, doing things right and ethical from the very beginning won’t fit into the time frame of today’s sprints.

Those who are in a privileged position— designers, developers, policy makers, entrepreneurs and capitalists— need to accept that the growth process has to be [slow](https://jackcheng.com/the-slow-web/), introspective and culturally meaningful rather than reckless, pompous, and presumptuous. And only then, will we ever be able to be proud of our works in every sense of the word. ⛅
