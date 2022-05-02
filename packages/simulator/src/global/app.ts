import 'reflect-metadata';
import { Appkit } from '@appkitjs.com/core';
import { HostBuilder } from '@appkitjs.com/types/dist/dom/host-builder';
import CoreBundle from './core-bundle';
//import { container, singleton } from 'tsyringe';

export class SuperService {
  public strings(): string[] {
    return ['my', 'heart', 'is', 'hurting'];
  }
}

class SimulatorHostBuilder implements HostBuilder {

  appDrawer: HTMLElement;

  constructor() {
    this.appDrawer = document.createElement('sl-drawer');
    this.appDrawer.setAttribute('placement', 'bottom');
    this.appDrawer.setAttribute('no-header', 'true');
    this.appDrawer.classList.add('app-container');
    document.body.appendChild(this.appDrawer);
  }

  async construct(type: string): Promise<HTMLElement> {
    console.log('Construct host: ', type);
    while (this.appDrawer.firstChild) {
      this.appDrawer.removeChild(this.appDrawer.firstChild);
    }
    this.appDrawer.setAttribute('open', 'true');
    this.appDrawer.style.cssText = '--size:90vh';
    return this.appDrawer;
  }

  async destruct(element: HTMLElement): Promise<void> {
    this.appDrawer.setAttribute('open', 'false');

    if(this.appDrawer.contains(element)) {
      try {
        this.appDrawer.removeChild(element);
      } catch(error) {}
    }
  }

}

export default async () => {

  const appkit = Appkit();
    
  /*if (navigator.storage && navigator.storage.persist)
    navigator.storage.persist().then(granted => {
      if (granted) {
        var idb = new IdbContentProvider('trunte', 'id');
        idb.save({ id: 'test-123', name: 'trunte' });
        appkit.registerProvider('test', idb);
      }

    });*/



  appkit.registerBundle(CoreBundle);
  appkit.hostBuilder = new SimulatorHostBuilder();
};

