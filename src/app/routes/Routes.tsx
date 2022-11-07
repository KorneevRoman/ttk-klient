import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "../../Pages/Home/Main";
import {Catalog} from "../../Pages/Catalog/Catalog";
import {Brand} from "../../Pages/Brand/Brand";
import {Delivery} from "../../Pages/delivery/Delivery";
import {About} from "../../Pages/About/About";
import {Contacts} from "../../Pages/Contacts/Contacts";
import {Search} from "../../Pages/Search/Search";

export const RoutesPage = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
            <Route path={'/catalog/:sort'} element={<Catalog/>}/>
            <Route path={'/delivery'} element={<Delivery/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>
            <Route path={'/brand/:brand'} element={<Brand/>}/>
            <Route path={'/search/:search'} element={<Search/>}/>
        </Routes>
    );
};

