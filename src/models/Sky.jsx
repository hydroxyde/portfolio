import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'



import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {

    const skyref = useRef()
    const sky = useGLTF(skyScene)

    useFrame((_, delta) => {
        if (isRotating) {
            skyref.current.rotation.y += 0.15 * delta
        }
    })
    return (
        <mesh ref={skyref}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky