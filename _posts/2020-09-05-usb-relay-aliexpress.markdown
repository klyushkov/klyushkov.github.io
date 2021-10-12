---
layout: post
title:  "HTTP API for Aliexpress USB 4-channel relay"
date:   2020-09-05 11:12:45 +0000
categories: homelab
---
I'm running [Flussonic Watcher](https://flussonic.com/watcher/) on my country house as a main video surveillance solution. One of the features is License Plate Recognition that I use for opening the motorized gate instead of using a general RFID card.

It's a great solution that allows me to speed up passing the gate, camera detects my car in 20-30 meters (thank you to optical zoom!). Before I've to use RFID card: I've to stop a car and then open a window and put a card several centimeters near the card reader. So, now I am able to pass the gate to my house without stopping the car.

It's a well-described feature described on a [vendor's website](https://flussonic.com/doc/watcher/howto/), the article is about my several python lines adopted from [Chinese example.](http://www.icstation.com/icstation-micro-channel-relay-module-control-relay-module-icse012a-p-4012.html)

Flussonic Watcher runs an external script (makes HTTP request, webhook) when detects the license plate in the camera's vision, so, I need to convert the python CLI script into a web application that will press a button connected to a gate's controller.

[klyushkov/http-relay](https://github.com/klyushkov/http-relay)
