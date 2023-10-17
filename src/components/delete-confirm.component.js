export default function DeleteConfirmation({ onDialog, to_delete }) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={() => onDialog(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3 style={{ color: "#111", fontSize: "20px", textAlign: "center" }}>Are you sure you would like to delete "{to_delete}"?</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
                className="delete-button"
              onClick={() => onDialog(true)}
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                marginRight: "8px",
                border: "none",
                marginLeft: '0%'
              }}
            >
              Delete
            </button>
            <button
                className="delete-button"
              onClick={() => onDialog(false)}
              style={{
                background: "gray",
                color: "white",
                padding: "10px",
                marginLeft: "8px",
                border: "none",
                marginLeft: '0%'
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
  