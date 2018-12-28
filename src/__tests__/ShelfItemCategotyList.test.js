import React from 'react';

import ShelfItemCategoryList from '../components/ShelfItemCategoryList';
import { mount } from 'enzyme';


describe('[Component] ShelfItemCategoryList', () => {
    const setup = {
	changeCategoryFn: jest.fn(),
	itemId: "bf2212",
	actualCategory: "None"
    };

    it('renders a select', () =>{
        const wrapper = mount(
            <ShelfItemCategoryList {...setup} />
        );
        expect(wrapper.find('select')).toHaveLength(1);

    });

    it('renders a list of options', () =>{
        const wrapper = mount(
            <ShelfItemCategoryList {...setup} />
        );
        expect(wrapper.find('option')).toHaveLength(5);

    });

    it('calls a function when an option is selected', ()=>{
        const wrapper = mount(
            <ShelfItemCategoryList {...setup} />
        );

        wrapper.find('select').simulate('change', {target: {value: 'read'}});

        expect(setup.changeCategoryFn).toHaveBeenCalledTimes(1);
    });
});
