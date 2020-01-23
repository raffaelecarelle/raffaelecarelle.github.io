---
layout: post
title:  "How can I pass variable from the contronller to the Twig Template?"
date: 2020-01-23 12:26:29 +0100
categories: symfony
comments: true
---
The solution is very simple. 

But I want to start from beginning. 

Every Controller in Symfony MUST return a Response. This one can be a generic Response, JSONResponse, BinaryResponse, and so on.

So we need to inject into our controller a TwigEnvironment Object to render a template and return a response as describe before:

```php
<?php

...

private $twig;

public function __contruct(\TwigEnvironment $twig)
{
    $this->twig = $twig;
} 

...

return new Response($this->twig->render('path/to/template.html.twig', $params);

```

The variable `$params` is an array which can contains every you want (other arrays, text, objects, entities etc...)

*If our Controller extends the Symfony AbstractController we have a way to write a better and cleaner code*

The example above becames:

```php
<?php

...

return $this->render('path/to/template.html.twig', $params);

```

As you can see, I have remove a twig instance variable and constructor and the last line is changed also. It is all cleaner and linear.

If you have a question for me, you can leave a comment below.
