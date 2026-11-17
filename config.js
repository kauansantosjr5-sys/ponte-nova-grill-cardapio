/* Configuração do cardápio – Ponte Nova Grill */
window.PN_CONFIG={
  supabaseUrl:'https://zgahylvkherldccrhxue.supabase.co',   // ex.: 'https://abcdxyz.supabase.co'
  supabaseKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYWh5bHZraGVybGRjY3JoeHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2ODE0ODUsImV4cCI6MjExMDI1NzQ4NX0.GCnBJIOpwAcPsd2n1e_ttjlN4ovrLsOyBtNfkZV3nwU',   // chave "anon public" (publishable) do Supabase – NUNCA a service_role
  delivery:'31986291170', // WhatsApp do delivery (pedidos sem mesa)
  whatsapp:'',      // vazio = pedido vai para o painel da cozinha
  modo:'pedido'     // 'pedido' | 'ver'
};
