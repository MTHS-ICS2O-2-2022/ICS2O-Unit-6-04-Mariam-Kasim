// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'

window.onload = function() {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")


  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions = "Radius = " + radius + " units"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "Volume = " + volume.toFixed(2) + " units³"
}