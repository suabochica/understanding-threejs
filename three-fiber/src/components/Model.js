import React from "react";

import { ThreeMFLoader } from 'three/examples/jsm/loader/3MFLoader';
import { useLoader } from "@react-three/fiber";

import model from '../assets/buckineer.3md'

const Model = () => {
    const geometry = useLoader(ThreeMFLoader, model);

    return <primitive object={geometry} />
}

export default Model;
