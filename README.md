# ee-soa-discovery

Basic SOA Discovery implementation. Discovery implementations shoud inherit from this class

## installation

	npm install ee-soa-discovery

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-discovery.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-discovery)

## usage

Let your discovery implementaion inherit from this class. Overwrite the «discover» Method.

	var   SOADiscovery  = require('ee-soa-discovery')
		, Class 		= require('ee-class');

	var MyDiscovery = new Class({
		inherits: SOADiscovery


		, discover: function(application, service, callback) {

		}
	});