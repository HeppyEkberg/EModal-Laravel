# Elicit Modal (for Laravel) 
Elicit Modal is a laravel component, which opens a links URL and puts the result in a modal.
  
##### Composer:
Add elicit modal as a depencency with Composer
```
  "require": {
    "heppykarlsson/emodal-laravel": "1.0.*"
  },
  "repositories": [
    { "type": "vcs", "url": "https://github.com/HeppyKarlsson/emodal-laravel.git" }
  ],
```

##### Load in Layout
Import the placeholder and javscripts in your layouts.
``` 
<script src="/js/emodal/manager.js"></script>
@include('EModal::modal')
```

##### Use on a link
Add the class "modal-open" on a link and emodal will automatically open the link with a ajax request and open the result in a modal.
```
<a class="modal-open" href="URL_TO_OPEN_IN_MODAL">
   Your link text
</a>
```


##### Extend views
Extend one of the two EModal templates to get the correct modal layout for bootstrap. 

```
@extends('EModal::template-content')
 
@section('modal-content')
@endsection

```

```
@extends('EModal::template')
  
@section('modal-header')
@endsection
 
@section('modal-body')
@endsection
 
@section('modal-footer')
@endsection
```
 
---

## Optional steps

##### Publish files.
```
php artisan vendor:publish
```
