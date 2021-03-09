import * as THREE from 'three'
import './style.css'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = 5
camera.position.y = 5
camera.position.z = 5
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const axis = new THREE.AxesHelper(10)
scene.add(axis)

const material = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  wireframe: true
})

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 10), material)
scene.add(sphere)

function animate(): void {
  requestAnimationFrame(animate)
  render()
}

function render(): void {
  const timer = 0.001 * Date.now()

  let r = 3
  sphere.position.x = Math.sin(timer) * r
  sphere.position.y = Math.cos(timer) * r
  sphere.rotation.x += 0.01
  renderer.render(scene, camera)
}

animate()
