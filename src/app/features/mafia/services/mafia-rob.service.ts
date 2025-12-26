import { Injectable } from '@angular/core';
import {mafiaConfig} from "../../../core/config/mafia.config";

@Injectable({
  providedIn: 'root'
})
export class MafiaRobService {

  constructor() { }

  playerRobSuccessRate(mafiaLevel: number): number {
    return mafiaConfig.rob.player.baseSuccessRate + mafiaConfig.rob.player.successRateByLevel * mafiaLevel;
  }
  playerRobMinStealAmount(mafiaLevel: number): number {
    return mafiaConfig.rob.player.stealAmount.min + mafiaConfig.rob.player.stealAmount.byLevel * mafiaLevel;
  }
  playerRobMaxStealAmount(mafiaLevel: number): number {
    return mafiaConfig.rob.player.stealAmount.max + mafiaConfig.rob.player.stealAmount.byLevel * mafiaLevel;
  }

  companyRobSuccessRate(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.company.baseSuccessRate +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.company.successRateByLevel;
  }
  companyMinStealAmount(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.company.stealAmount.min +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.company.stealAmount.byLevel;
  }
  companyMaxStealAmount(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.company.stealAmount.max +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.company.stealAmount.byLevel;
  }
  companyMaxValue(mafiaLevel: number) {
    return mafiaConfig.rob.company.maxValue * mafiaLevel;
  }
  companyCooldown() {
    return mafiaConfig.rob.company.cooldown;
  }

  bankAccountRobSuccessRate(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.bankAccount.baseSuccessRate +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.bankAccount.successRateByLevel;
  }
  bankAccountMinStealAmount(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.bankAccount.stealAmount.min +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.bankAccount.stealAmount.byLevel;
  }
  bankAccountMaxStealAmount(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.bankAccount.stealAmount.max +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.bankAccount.stealAmount.byLevel;
  }
  bankAccountMaxValue(mafiaLevel: number) {
    return mafiaConfig.rob.bankAccount.maxValue * mafiaLevel;
  }
  bankAccountCooldown() {
    return mafiaConfig.rob.bankAccount.cooldown;
  }

  houseRobSuccessRate(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.house.baseSuccessRate +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.house.successRateByLevel;
  }
  houseMinStealAmount(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.house.stealAmount.min +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.house.stealAmount.byLevel;
  }
  houseMaxStealAmount(mafiaLevel: number, targetLevel: number) {
    return mafiaConfig.rob.house.stealAmount.max +
      Math.abs(mafiaLevel - targetLevel) * mafiaConfig.rob.house.stealAmount.byLevel;
  }

  cyberAttackSuccessRate() {
    return mafiaConfig.rob.cyberattack.successRate;
  }
  cyberAttackStealAmount() {
    return mafiaConfig.rob.cyberattack.stealAmount;
  }
  cyberAttackCooldown() {
    return mafiaConfig.rob.cyberattack.cooldown;
  }
  cyberAttackTargetDescription() {
    return mafiaConfig.rob.cyberattack.target;
  }

  aiDronePlayerSuccessRate() {
    return mafiaConfig.rob.aiDronePlayer.successRate;
  }
  aiDronePlayerMinStealAmount() {
    return mafiaConfig.rob.aiDronePlayer.stealAmount.min;
  }
  aiDronePlayerMaxStealAmount() {
    return mafiaConfig.rob.aiDronePlayer.stealAmount.max;
  }
  aiDronePlayerTargetDescription() {
    return mafiaConfig.rob.aiDronePlayer.target;
  }

  aiDroneHouseSuccessRate() {
    return mafiaConfig.rob.aiDroneHouse.successRate;
  }
  aiDroneHouseMinStealAmount() {
    return mafiaConfig.rob.aiDroneHouse.stealAmount.min;
  }
  aiDroneHouseMaxStealAmount() {
    return mafiaConfig.rob.aiDroneHouse.stealAmount.max;
  }
  aiDroneHouseTargetDescription() {
    return mafiaConfig.rob.aiDroneHouse.target;
  }

  shopliftingSuccessRate() {
    return mafiaConfig.rob.shoplifting.successRate;
  }
  shopliftingMinStealAmount(targetLevel: number) {
    return mafiaConfig.rob.shoplifting.stealAmount.min * targetLevel;
  }
  shopliftingMaxStealAmount(targetLevel: number) {
    return mafiaConfig.rob.shoplifting.stealAmount.max * targetLevel;
  }
  shopliftingTargetDescription() {
    return mafiaConfig.rob.shoplifting.target;
  }

  phishingSuccessRate() {
    return mafiaConfig.rob.phishing.successRate;
  }
  phishingStealAmount() {
    return mafiaConfig.rob.phishing.stealAmount;
  }
  phishingCooldown() {
    return mafiaConfig.rob.phishing.cooldown;
  }
  phishingTargetDescription() {
    return mafiaConfig.rob.phishing.target;
  }
}
