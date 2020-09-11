import { observable, action, decorate } from 'mobx';
class Store {
  members = [];
  isOpen = [];

  getMembers = () => {
    return this.members;
  };

  getMemberById = (id) => {
    return this.members.filter((member) => member.id === id);
  };

  fetchMembers = () => {
    console.log('fetching');
    fetch(`http://localhost:3000/data.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log('fetched');
        this.setMembers(data.members);
      });
  };
  setIsOpen = (i) => {
    let isOpen = this.isOpen.slice();
    isOpen[i] = true;
    this.isOpen = isOpen;
  };
  closeModal = (i) => {
    this.isOpen[i] = false;
  };
  setMembers = (members) => {
    this.members = members;
  };
}
decorate(Store, {
  members: observable,
  isOpen: observable,
  popovers: observable,
  showModal: observable,
  getMemberById: action,
  getMembers: action,
  fetchMembers: action,
  setMembers: action,
  setIsOpen: action,
  closeModal: action,
  setPopovers: action,
});
// export class
export default new Store();
