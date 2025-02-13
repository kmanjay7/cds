export default function handler(req, res) {
  const jsonData = [
    {
      project_id: 1,
      project_name: "Sample Project 1",
    },
    {
      project_id: 2,
      project_name: "Sample Project 2",
    },
    {
      project_id: 3,
      project_name: "Sample Project 3",
    },
  ];
  res.status(200).json({ status: true, data: jsonData });
}
