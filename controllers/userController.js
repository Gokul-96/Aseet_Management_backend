const supabase = require('../services/supabaseClient');

// Fetch user profile
const getProfile = async (req, res) => {
  const { user } = req;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  // Fetch user details from Supabase
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Update user profile
const updateProfile = async (req, res) => {
  const { user } = req;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { name, bio } = req.body; // Example fields
  const { data, error } = await supabase
    .from('users')
    .update({ name, bio })
    .eq('id', user.id)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

module.exports = { getProfile, updateProfile };