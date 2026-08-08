import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PhotosPage from './PhotosPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
