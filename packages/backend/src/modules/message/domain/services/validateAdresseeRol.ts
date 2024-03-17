export async function validateAdresseRol(RolDestinatario: string, RolRemitente: string): Promise<boolean> {
  if (RolRemitente === 'Client') {
    return Promise.resolve(RolDestinatario === 'Agent');
  }
  if (RolRemitente === 'Agent') {
    return Promise.resolve(RolDestinatario === 'Owner');
  }
  return Promise.resolve(false);
}
