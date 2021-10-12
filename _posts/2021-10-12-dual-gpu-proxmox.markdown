---
layout: post
title:  "Dual Nvidia GPU passthrough on Proxmox 7"
date:   2021-10-12 17:33:53 +0000
categories: homelab virtualization
---

Draft.

Last weekend I bought a new PC instead of an old Core i5 2th Gen that has served me about 9 years. 

I've to change my hardware due to strange system freezes, the performance of i5 2300 has enough because I play mostly online or old games.

I decided to take advantage of the situation and implement my idea of building a dual desktop PC (two GPUs passed into individual VMs). The idea is fantastic: +1 gaming PC in the house for my friends in addition to other computers, now LAN parties can be larger and more convenient.

Hardware:
* AMD Ryzen 3700X
* GIGABYTE B550 GAMING X V2 Motherboard
* NVMe SSD Western Digital 1000 GB WDS100T2B0C
* Nvidia GTX 1060
* Nvidia GTX 1050 Ti

I've started with [the official documentation](https://pve.proxmox.com/wiki/Pci_passthrough#GPU_OVMF_PCI_Express_Passthrough) but faced several issues.

...
