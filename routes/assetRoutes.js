const express = require('express');
const {
  createAsset,
  getAssets,
  getAsset,
  updateAsset,
  deleteAsset
} = require('../controllers/assetController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createAsset);
router.get('/', getAssets);
router.get('/:id', getAsset);
router.put('/:id', authMiddleware, updateAsset);
router.delete('/:id', authMiddleware, deleteAsset);

module.exports = router;
