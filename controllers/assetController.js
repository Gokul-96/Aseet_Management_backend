let assets = []; 

const createAsset = (req, res) => {
  const { name, description } = req.body;
  const newAsset = { id: assets.length + 1, name, description };
  assets.push(newAsset);
  res.status(201).json(newAsset);
};

const getAssets = (req, res) => {
  res.status(200).json(assets);
};

const getAsset = (req, res) => {
  const asset = assets.find(a => a.id === parseInt(req.params.id));
  if (!asset) return res.status(404).json({ error: 'Asset not found' });
  res.status(200).json(asset);
};

const updateAsset = (req, res) => {
  const asset = assets.find(a => a.id === parseInt(req.params.id));
  if (!asset) return res.status(404).json({ error: 'Asset not found' });

  const { name, description } = req.body;
  asset.name = name || asset.name;
  asset.description = description || asset.description;

  res.status(200).json(asset);
};

const deleteAsset = (req, res) => {
  const index = assets.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Asset not found' });

  assets.splice(index, 1);
  res.status(204).end();
};

module.exports = { createAsset, getAssets, getAsset, updateAsset, deleteAsset };