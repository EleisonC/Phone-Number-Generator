/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
class phoneNumberGen {
  constructor() {
    this.phoneNumber = new Set();
  }

  generatePhoneNumber() {
    // eslint-disable-next-line prefer-template
    return '0' + Math.floor(Math.random() * 900000000 + 100000000);
  }

  generate(count) {
    const existingCount = this.phoneNumber.size;
    const newCount = parseInt(count) + parseInt(existingCount);
    for (let i = 0; i < count; i++) {
      this.phoneNumber.add(this.generatePhoneNumber());
    }
    const availableCount = this.phoneNumber.size;
    if (availableCount < newCount) {
      this.generate(newCount - availableCount);
    }
    return this.phoneNumber;
  }
}

export default phoneNumberGen;
