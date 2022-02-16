const actTarjeta = async(actPath) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + actPath, {
        method: 'PUT',
        body: JSON.stringify(formData()),
        headers: { 'x-token': token, user: uid }
    });
    const respuesta = await resp.json();
    window.location('');
}