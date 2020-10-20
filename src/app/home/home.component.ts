import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoaded = true;
  isOpenLocations = true;

  title = "food-bank-app-anim";
  selected;

  foodBanks = [
    {
      name: "Food Bankly",
      description: "Morbi quam nunc, vestibulum nec ultricies condimentum, semper non eros. Cras sollicitudin pharetra justo fringilla viverra. Praesent mollis purus ac convallis condimentum.",
      image: "assets/joel-muniz-BErJJL_KsjA-unsplash.jpg",
      location: "Witkeap, OR",
      hours: "10AM - 5PM, M-F",
    },
    {
      name: "Greater San Fransokyo Food Bank",
      description: "Nullam eleifend turpis quis luctus imperdiet. Duis imperdiet, massa eget maximus iaculis, augue sem viverra eros, et vehicula purus eros a libero. Mauris a arcu vehicula, vulputate lorem eu, semper enim.",
      image: "assets/joel-muniz-qvzjG2pF4bE-unsplash.jpg",
      location: "Rilstone, CA",
      hours: "9AM - 6PM, M-R",
    },
    {
      name: "Meals for Families",
      description: "Pellentesque semper nec mauris a vestibulum. Cras dapibus accumsan bibendum.",
      image: "assets/joel-muniz-3k3l2brxmwQ-unsplash.jpg",
      location: "Coorteufield, VA",
      hours: "11AM - 10PM, MWF",
    }
  ];

  toggleOpenLocations() {
    this.isOpenLocations = !this.isOpenLocations;
  }
}
