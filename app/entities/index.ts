import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../types";
import { Weapon, ThrowableWeapon, Warrior } from "../interfaces";

@injectable
export class Katana implements Weapon {
  public hit() {
    return "cut 1";
  }
}

@injectable
export class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit";
  }
}

@injectable
export class NinJa implements Warrior {
  private _katana: Weapon;
  private _shuriken: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shruiken: ThrowableWeapon
  ) {
    this._katana = katana;
    this._shuriken = shruiken;
  }

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}

export { NinJa, Katana, Shuriken };
