const backendUrl = import.meta.env.VITE_BACKED_URL;

export const getUsers = async () => {
  let result = { success: false, data: null, error: null, loading: true };
  try {
    const response = await fetch(`${backendUrl}/api/friends`);
    const data = await response.json();
    if (response.ok) {
      result = { success: true, data, error: null, loading: false };
    } else {
      result = {
        success: false,
        data: null,
        error: data.error || data.message || "Unknown error",
        loading: false,
      };
    }
  } catch (error) {
    result = {
      success: false,
      data: null,
      error: error.message || "Network error",
      loading: false,
    };
  }
  return result;
};
export async function createUser(name, role, description, gender) {
  let result = { success: false, data: null, error: null, loading: true };
  try {
    if (!name || !role || !description || !gender) {
      return;
    }
    const input = { name, role, description, gender };
    const response = await fetch(`${backendUrl}/api/friends`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      result = { success: true, data, error: null, loading: false };
    } else {
      result = {
        success: false,
        data: null,
        error: data.error || data.message || "Unknown error",
        loading: false,
      };
    }
  } catch (error) {
    result = {
      success: false,
      data: null,
      error: error.message || "Network error",
      loading: false,
    };
  }
  return result;
}

export async function editUser(id, name, role, description, gender) {
  let result = { success: false, data: null, error: null, loading: true };
  try {
    if (!name || !role || !description || !gender) {
      return;
    }
    const input = { name, role, description, gender };
    const response = await fetch(`${backendUrl}/api/friends/${id}`, {
      method: "PATCH",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      result = { success: true, data, error: null, loading: false };
    } else {
      result = {
        success: false,
        data: null,
        error: data.error || data.message || "Unknown error",
        loading: false,
      };
    }
  } catch (error) {
    result = {
      success: false,
      data: null,
      error: error.message || "Network error",
      loading: false,
    };
  }
  return result;
}

export async function deleteUser(id) {
  let result = { success: false, data: null, error: null, loading: true };
  try {
    if (!id) return;

    const response = await fetch(`${backendUrl}/api/friends/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      result = { success: true, data, error: null, loading: false };
    } else {
      result = {
        success: false,
        data: null,
        error: data.error || data.message || "Unknown error",
        loading: false,
      };
    }
  } catch (error) {
    result = {
      success: false,
      data: null,
      error: error.message || "Network error",
      loading: false,
    };
  }
  return result;
}
