import React from "react";
//import renderer from "react-test-renderer";
import Enzyme from "enzyme"; //wrapper on top of react-test-renderer
import Adapter from "enzyme-adapter-react-16";
import Search from "../Search";
import ShowCard from "../ShowCard";
import preload from '../data.json'

Enzyme.configure({ adapter: new Adapter() });

test("Search renders correctly", () => {
  //alternative: const component = renderer.create(<Search />);
  const component = Enzyme.shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
  const component = Enzyme.shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

/*
test("Search should render correct amount of shows based on search term", () => {

});*/
