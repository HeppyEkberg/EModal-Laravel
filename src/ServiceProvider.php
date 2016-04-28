<?php namespace HeppyKarlsson\EModal;

use Illuminate\Support\ServiceProvider AS Default_ServiceProvider;

class ServiceProvider extends Default_ServiceProvider
{

    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/views', 'EModal');

        $this->publishes([
            __DIR__ . '/js' => public_path('/js/emodal'),
        ]);
    }

    public function register() {

    }
}